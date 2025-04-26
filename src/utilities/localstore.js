import toast from "react-hot-toast";

const success = (name) => toast.success(`Appointment scheduled for ${name} successfully.`);
const warn = () => toast.error(`Appointment already scheduled for today!`);
const cancelAppointment = () => toast(`Appointment canceled!`,{icon: '⛔'});

const getMyBookings = () => {
    const myBookingsStr = localStorage.getItem('myBookings')
    if (myBookingsStr) {
        const myBookings = JSON.parse(myBookingsStr)
        return myBookings
    }
    else {
        return []
    }
}

const saveMyBookings = myBookings =>{
    const myBookingsStr = JSON.stringify(myBookings)
    localStorage.setItem('myBookings', myBookingsStr)
}


const addIdToMyBookings = (id, name)=> {
    const myOldBookings = getMyBookings()
    const isExist = myOldBookings.includes(id)

    if(isExist){
        warn()
    }else{
        const myBookings = [...myOldBookings, id]
        saveMyBookings(myBookings)
        success(name)
    }
}

const removeFromMyBookings = id =>{
    const myBookings = getMyBookings()
    const newBookings = myBookings.filter(oldId => oldId!=id)
    saveMyBookings(newBookings)
    cancelAppointment()
}

const isLawyerBooked = id =>{
    const myBookings = getMyBookings()
    return myBookings.includes(id)
}

export { getMyBookings , addIdToMyBookings , removeFromMyBookings , isLawyerBooked }