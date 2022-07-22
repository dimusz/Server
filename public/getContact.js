async function getData(){
    const response= await fetch('/api')
    const data = await response.json()

    for (item of data){
        const container = document.createElement('div')
        container.className='principal'
        const name = document.createElement('div')
        const phone = document.createElement('div')
        const email = document.createElement('div')
        const msg = document.createElement('div')
        const geo = document.createElement('div')
        const date = document.createElement('div')

        name.textContent=`name:${item.newName}`
        phone.textContent=`phone no:${item.newPhone}`
        email.textContent=`email:${item.newEmail}`
        msg.textContent=`your msg:${item.newMessage}`
        geo.textContent=`your location:${item.lat}, ${item.lon}`
        const dateString=new Date(item.timestamp).toLocaleString()
        date.textContent=dateString
        container.append(name, phone, email, msg, geo, date)
        document.body.append(container)
    }

}

getData()