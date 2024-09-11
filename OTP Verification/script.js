function moveToNext(current, nextFieldId) {
    if (current.value.length === 1 && nextFieldId) {
        document.getElementById(nextFieldId).focus();
    }
}

function moveToPrev(event, current, prevFieldId) {
    if (event.key === "Backspace" && current.value === "" && prevFieldId) {
        document.getElementById(prevFieldId).focus();
    }
}