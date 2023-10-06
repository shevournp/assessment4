const complimentBtn = document.getElementById("complimentButton")
const inputBotton = document.getElementById('inputButton')
const input = document.querySelector('input')
const container1 = document.getElementById('container1')

const complimentCall = ({date:forture}) => input.value
const errorCallBack =error => console.log(error.response.data)

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            console.log(data)
            alert(data.forture);
    });
};

const addCompliment=(body)=> {
    axios.post(`http://localhost:4000/api/compliment/:id`,body)
    .then(console.log(createFortune))
}

const addCompliment = (event)=> {
    event.preventDefault()
    let body= {
        forture:input.value
    }
}

    axios.post(`http://localhost:4000/api/compliment/`,body)
        .then(res => {
            container1.innerHTML=''
            for(let i=0; i<res.data.length; i++){
                createFortune(res.data[i])}
            })
         .catch(errorCallBack)

complimentBtn.addEventListener('click', getCompliment)