<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Show Student</h4>
            </div>
            <div class="card-body">

                <ul class="alert alert-danger" v-if="Object.keys(this.errorList).length > 0">
                    <li class="mb-0 ms-3" v-for="(error, index)  in this.errorList" :key="index">
                        {{ error[0] }}
                    </li>
                </ul>


                <div class="mb-3">
                    <label for="">Name</label>
                    <input type="text" v-model="model.student.name" class="form-control" />
                </div>

                <div class="mb-3">
                    <label for="">Course</label>
                    <input type="text" v-model="model.student.course" class="form-control" />
                </div>

                <div class="mb-3">
                    <label for="">Email</label>
                    <input type="email" v-model="model.student.email" class="form-control" />
                </div>

                <div class="mb-3">
                    <label for="">Phone</label>
                    <input type="text" v-model="model.student.phone" class="form-control" />
                </div>
            </div>
        </div>
    </div>
  </template>

  

<script>
   import axios from 'axios'

export default {
    name: 'studentShow',
    data(){
        return {
            studentId: '',
            errorList: '',
            model: {
                student: {
                    name: '',
                    course: '',
                    email: '',
                    phone: ''
                }
            }
        }
    },
    mounted(){

        // console.log(this.$route.params.id);
        this.studentId = this.$route.params.id;
        this.getShowStudentData(this.$route.params.id);

    },
    methods: {

        getShowStudentData(studentId) {

            axios.get(`http://localhost:9090/api/students/${studentId}`)
            .then(res => {

                console.log(res.data.student);

                 // You can use below waay to call for a single of each column
                // this.model.student.name = res.data.student.name; 

                // This line fetch all data for student
                this.model.student = res.data.student 
            })  
            .catch(function (error) {
                
                if (error.response) {

                    if(error.response.status == 404) {

                       alert(error.response.data.message);
                    }

                    else if (error.request) {
                       console.log(error.request);
                    } else {
                    console.log('Error', error.message);
                    }

                }
            });
        },
    },
}
</script>
  