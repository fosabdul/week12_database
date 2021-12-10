<template>
  <div> 

      <div v-show="student.name">
        <div v-if="student.present" class="alert alert-primary" role="alert">
         
              Welcome, {{ student.name }}!
          </div>
          <div v-else class="alert alert-info">
              Goodbye, {{ student.name }}. See you later!
          </div>          
      </div> 
  </div>
</template>

<script>

export default {
  name: 'StudentMessage',
  props: {  /// this data is coming from parent component in App.vue
    student: Object
  }
}

</script>

<style scoped>

</style>
