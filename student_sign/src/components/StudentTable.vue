<template>
  <div>
    <div class="card student-list m-2 p-2">
        <h4 class="card-title">Students List</h4>

        <div class="edit-table-toggle form-check">
            <input id="edit-table" type="checkbox" class="form-check-input" v-model="editTable"> 
            <label for="edit-table" class="form-check-label">Edit table?</label>
        </div>

        <div id="student-table">
            <table class="table">
                <tr>
                    <th>Name</th>
                    <th>StarID</th>
                    <th>Present?</th>
                    <th v-show="editTable">Delete</th> 
                    <!-- V-show when you want to show the delete box or not  -->
                </tr>
                <!-- Each row will have a check box and when the bx is check student will be in or out -->
                <Student-Row
                    v-for="student in students" 
                    v-bind:student="student" v-bind:key="student.starID"
                    v-bind:edit="editTable"
                    v-on:student-arrived-or-left="arrivedOrLeft" 
                    
                    v-on:delete-student="deleteStudent">
                    
                </Student-Row>
                <!-- $event.target.checked "is a HTML component/ check property of the component whether the box is check or not" -->
            </table>
        </div>
    </div>
  </div>
</template>

<script>

import StudentRow from '@/components/StudentRow.vue' //  

export default {
    name: 'StudentTable',  // student table job is going to be display the list of the student
    components: { StudentRow 

    }, // let the studentable know that it has student row component
    props: {
        students: Array
    },
    emits: ['student-present', 'delete-student'],
    data() {
        return {
            editTable: false //
        }
    },
    
    methods: {  // recheck
        arrivedOrLeft(student, present) {  // App.vue is incharge when the student arrive or leave,# from ST-table and Stable data is coming from ST-Row
            this.$emit('student-arrived-or-left', student, present)  // the parent can handle the event that happened     
        },
        deleteStudent(student) {
            this.$emit('delete-student', student) // this is going to parent inorder to delete this order
        }
    }
}
</script>

<style>


  


</style>

