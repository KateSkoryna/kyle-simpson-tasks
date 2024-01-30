const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, durationMinutes) {
    // get separately hours and minutes in string format
    const [, meetingStartHour, meetingStartMinutes] = startTime.match(/^(\d{1,2}):(\d{2})$/) || [];

    durationMinutes = Number(durationMinutes);

    if (typeof meetingStartHour === "string" && typeof meetingStartMinutes === "string") {

        // convert minutes into hours and minutes
        let durationHours = Math.floor(durationMinutes / 60);
        durationMinutes = durationMinutes - (durationHours * 60);

        // check end hour and minute of meeting
        let meetingEndHour = Number(meetingStartHour) + durationHours;
        let meetingEndMinutes = Number(meetingStartMinutes) + durationMinutes;


        if (meetingEndMinutes >= 60) {
            meetingEndHour = meetingEndHour + 1;
            meetingEndMinutes = meetingEndMinutes - 60;
        }

        let meetingStart = `${meetingStartHour.padStart(2, "0")}:${meetingStartMinutes.padStart(2, "0")}`;
        let meetingEnd = `${String(meetingEndHour).padStart(2, "0")}:${String(meetingEndMinutes).padStart(2, "0")}`;

        return (
        meetingStart >= dayStart && meetingEnd <= dayEnd
    );
    }

    return false;
    
}

console.log(scheduleMeeting("7:00", "15"))
console.log(scheduleMeeting("7:15", 30))
console.log(scheduleMeeting("11:30", 60))
console.log(scheduleMeeting("17:00", 45))
console.log(scheduleMeeting("17:30", 30))
console.log(scheduleMeeting("18:00", 15))