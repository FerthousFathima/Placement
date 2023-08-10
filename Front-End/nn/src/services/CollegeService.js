import axios from 'axios';

const COLLEGE_API_URL ="http://localhost:8083/college";
class CollegeService {

    getColleges() {
        return axios.get(COLLEGE_API_URL);
    }
    createCollege(colleges){
        return axios.post(COLLEGE_API_URL, colleges);
    }
    getCollegebyId(CollegeById){
        return axios.get(COLLEGE_API_URL+"/"+CollegeById);
    }
    updateCollege(colleges,CollegeById){
        return axios.put(COLLEGE_API_URL+"/"+CollegeById,colleges);
    }
    deleteCollege(CollegeById){
        return axios.delete(COLLEGE_API_URL+"/"+CollegeById)
    }
    


}

export default new CollegeService()