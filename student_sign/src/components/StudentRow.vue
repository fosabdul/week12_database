<template>
            <tr v-bind:class="{ present: student.present, absent: !student.present }">    
                <td>{{ student.name }}</td>
                <td>{{ student.starID }}</td>
                <td><input type="checkbox" v-bind:checked="student.present" 
                v-on:change="arrivedOrLeft(student, $event.srcElement.checked)"></td>
                <td v-show="edit"><img class="delete-icon" v-on:click="deleteStudent" src="@/assets/delete.png"> 
    
                 <!-- v-show = show or not show base on edit property  -->
    </td>

  </tr>
</template>

<script>

export default {
    name: 'StudentRow',
    emits: ['student-arrived-or-left', 'delete-student'],
    props: {
        student: Object,
        edit: Boolean // in the v-show property
    },
       methods: {
        arrivedOrLeft(student, present) {
            this.$emit('student-arrived-or-left', student, present)
            //studentrow is emiting the checkbox is check and it is going to studenttable will receive this msg
        },
        deleteStudent() {
            if (confirm(`Delete ${this.student.name}?`)) { 
                this.$emit('delete-student', this.student)
                // when student is deleted the studentRow cn't delete it 
                // it has to go ST-Table it can't delete either 
                // it has to go the main parent App.vue
                // App.vue will be able to delete 
            }
        }
    }
}

</script>

<style>

.present {
    color: gray;
    font-style: italic;
}

.absent {
    color: #000;
    font-weight: bold;
}

.delete-icon {
    height: 50px;
}

</style>

