var dispCountry = () =>{
    let htmlHolder = ""
    fetch('https://coronavirus-19-api.herokuapp.com/countries')
    .then(data=>data.json())
    .then(data=>{
        data.map((val,index)=>{
            htmlHolder+="<tr><th scope='row'>"+index+"</th>"
            htmlHolder+="<td>"+val.country+"</td>"
            htmlHolder+="<td>"+val.deaths+"</td>"
            htmlHolder+="<td>"+val.recovered+"</td>"
            htmlHolder+="<td>"+val.active+"</td></tr>"
            document.getElementById("tab").innerHTML+=htmlHolder
            htmlHolder=""
        })
    })
}

var searchCountry = () =>{
    let htmlHolder = ""
    let searchVal = document.getElementById("searcher").value
    document.getElementById("tab").innerHTML=""
    fetch('https://coronavirus-19-api.herokuapp.com/countries')
    .then(data=>data.json())
    .then(data=>{
        data=data.filter(data=>data.country.toLowerCase()==searchVal.toLowerCase()||searchVal=="")
        console.log(data)
        data.map((val,index)=>{
            htmlHolder+="<tr><th scope='row'>"+index+"</th>"
            htmlHolder+="<td>"+val.country+"</td>"
            htmlHolder+="<td>"+val.deaths+"</td>"
            htmlHolder+="<td>"+val.recovered+"</td>"
            htmlHolder+="<td>"+val.active+"</td></tr>"
            document.getElementById("tab").innerHTML+=htmlHolder
            htmlHolder=""
        })
    })
}