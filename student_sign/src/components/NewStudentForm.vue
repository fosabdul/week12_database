<template>
    <div>      
        <div class="alert alert-danger" v-show="errors.length">
            <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </div>

        <div class="card add-student m-2 p-2">
            <h4 class="card-title">Add new student </h4>

            <div class="form-group">
                <label for="name">Name</label>
                <input id="name" class="form-control" v-model.trim="newStudentName">
            </div>
            <div class="form-group">
                <label for="starID">Star ID</label>
                <input id="starID" class="form-control" v-model.trim="newStarID">
            </div>
            <button class="btn btn-primary" v-on:click="addStudent">Add</button>
        </div>
    </div>
</template>

<script>

export default {   // creating the components
    name: 'NewStudentForm',
    emits: ['student-added'], // to fix the msg and prop to b this will be array the event names that would be emitted
    data() {
        return {
            newStudentName: '',
            newStarID: '',
            errors: []
        }
    },
    methods: {
        addStudent() {
            this.errors = []

            if (!this.newStudentName) {
                this.errors.push('Student name is required')
            }

            if (!this.newStarID) {
                this.errors.push('StarID is required')
            }

            if (this.errors.length == 0) {
                let student = { name: this.newStudentName, starID: this.newStarID, present: false }

                // this will tell the parent new student has been add 

                this.$emit('student-added', student)   /// emit message to parent with new student 

                this.newStudentName = ''
                this.newStarID = ''
            }   
        }  ///
    }
}

</script>

<style scoped>
    /* Write any styles for elements in this component here  */
</style>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



.card-title{
    text-align: center;
}





</style>
