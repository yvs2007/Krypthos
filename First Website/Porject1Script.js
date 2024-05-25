function get_element() {
    const message = document.getElementById("UserMessage").value;
    const encodedMessage = Encoder(message);
    const encodedMessage2 = encoded2(encodedMessage);
    document.getElementById("MessageOutput").innerHTML = encodedMessage2;

}

function Encoder(message) {
    if (typeof message !== 'string') {
        console.log('Input must be a string');
        return '';
    }
    
    // Convert the string to a Base64 encoded string
    const encodedMessage = btoa(message);
    
    return encodedMessage;
}
function encoded2(encodedMessage){
        if (typeof encodedMessage !== 'string') {
        console.log('Input must be a string');
        return '';
    }
    
    // Convert the string to a Base64 encoded string
    const encodedMessage2 = btoa(encodedMessage);
    
    return encodedMessage2;
}