const submitBtn=document.getElementById("submitBtn")
const cityName=document.getElementById("cityName")
const city_name=document.getElementById("city_name")
const temp_real_val=document.getElementById("temp_real_val")
const temp_status=document.getElementById("temp_status")
// const datahide=document.querySelector('.middle_layer'

const getInfo=async(event)=>{
    event.preventDefault()
    let cityVal=cityName.value
    // alert("perfect")
    if(cityVal==""){
        city_name.innerText=`Please Enter Something`
        // datahide.classList.add('data_hide')
    }
    else{
        try{
            //API : application programming interface
            let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=9e2c05277d7dcf09012865dc4d27d98c`
            const response=await fetch(url)
            const data=await response.json()
            const arrData=[data]
            console.log(data)
            city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`
            var t=arrData[0].main.temp-273.15
            temp_real_val.innerText=t.toFixed(2)
            // temp_status.innerText=arrData[0].weather[0].main
            const tempMood=arrData[0].weather[0].main
            // cloud condition
            if(tempMood=="Clear"){
                temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>"
            }
            else if(tempMood=="Cloudes"){
                temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;'></i>"
            }
            else if(tempMood=="Rain"){
                temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>"
            }
            else{
                temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;'></i>"
            }
            // datahide.classList.remove('data_hide')

        }
        catch{
            city_name.innerText=`Please Enter Valid City !`
            // datahide.classList.add('data_hide')
        }
    }
}
submitBtn.addEventListener("click",getInfo)

// date show
var d = new Date();
document.getElementById("day").innerHTML = d.toDateString();