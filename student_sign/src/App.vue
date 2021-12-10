<template>
  <div id="app">
    
    <h1 class="m-2">Student Sign In</h1>

    <NewStudentForm v-on:student-added="newStudentAdded"></NewStudentForm>
    <StudentTable
      v-bind:students="students" 
      v-on:student-present="studentArrivedOrLeft"
      v-on:delete-student="studentDeleted">
    </StudentTable>
    <StudentMessage v-bind:student="mostRecentStudent"></StudentMessage>

  </div>
</template>

<script>
import NewStudentForm from './components/NewStudentForm.vue'
import StudentTable from './components/StudentTable.vue'
import StudentMessage from './components/StudentMessage.vue'

export default {
  name: 'app',
  data() {
    return {
      students: [],
      mostRecentStudent: {}
    }
  },
  components: {
    NewStudentForm,
    StudentTable,
    StudentMessage
  },
  mounted() {
    // load all students - make request to API
    this.updateStudents()
  },
  methods: {
    updateStudents() {
      this.$student_api.getAllStudents().then( students => {
        this.students = students
      }).catch( err => { // generic alert 
        console.error('Error getting latest student list', err.response)
        alert('Sorry, unable to fetch student list')
      })
    },
    newStudentAdded(student) {
      this.$student_api.addStudent(student).then( () => {
        this.updateStudents()
      })
      .catch( err => {
        console.log('Error fetching student list', err)
        // if data is returned from the server and it's an array
        if (err.response.data && Array.isArray(err.response.data)) {
          // join messages and alert user - this will be used for DB validation errors
          let msg = err.response.data.join(',')
          alert('Error adding student\n' + msg)
        } else {
          // something else went wrong, display generic error
          console.error('Error adding student', err.response)
          alert('Sorry, unable to add student')
        }
      })
    },
    studentArrivedOrLeft(student, present) {
      student.present = present  // update present value 
      this.$student_api.updateStudent(student).then( () => { // sent St info to the present info
        this.mostRecentStudent = student // to vue the data 
        this.updateStudents()  // to go and re-query the API
      }).catch( err => {
        console.error('Error updating student', err.response)
        alert('Sorry, unable to update student')
      })
    },
    studentDeleted(student) {
      this.$student_api.deleteStudent(student.id).then( () => { //
        this.updateStudents() // to get latest updated student
        this.mostRecentStudent = {}  // clear welcome/goodbye message 
      }).catch( err => {
        console.error('Error deleting student', err.response)
        alert('Sorry, unable to delete student')
      })
    }
  }
}
</script>

<style>

@import "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css";

/* Use a regular CSS class, or a bootstrap class to the h1 to add spacing */
/* h1 {
  padding: 10px;
} */

</style>