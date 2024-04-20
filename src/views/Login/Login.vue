<template>
 <br>
 <div class="container">
  <div class="card" align="left">
    <div class="card-header">Login Form</div>
    <div class="card-body"> 
      <form  @submit.prevent="LoginData">
        <label>Email</label>
        <input type="email" v-model="student.email" name="email" id="email" required="required" class="form-control" placeholder="Email"/>

        <label>Password</label>
        <input type="password" v-model="student.password" name="password" id="password" required="required" class="form-control" placeholder="Password"> 
        <br>
        <button type="submit" value="Save" class="btn btn-primary">Login</button>
      </form>
    </div>
</div>
 </div>

</template>
 
 <script>
    import axios from 'axios'

   export default {
     name: 'Login',
     data () {
       return {
         result: {},
         student:{
            email: '',
            password: ''
         }
       }
     },
     created() { 
     },
     mounted() {
           console.log("mounted() called.......");
       },
     methods: {
            LoginData()
            {
             axios.post("http://127.0.0.1:9090/api/login", this.student)
             .then(
               ({data})=>{
                console.log(data);
                try {
                if (data.status === true) {
                      alert("Login Successfully"); 
                      this.$router.push({ name: 'home' })
                      } else {
                      alert("Login failed")
                      }

                      } catch (err) {
                      alert("Error, please try again");
                      }    
               }
             )
            }
       }
   }
   </script>