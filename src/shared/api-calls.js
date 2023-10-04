import axios from 'axios';



export const getMeals = async () => {
    const data  =  await axios.get('https://react-firebase-75251-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json')
        .then(
            response => { 
                return response.data

            }, error => {
                console.log(error)
            }
        )
        return data;
}