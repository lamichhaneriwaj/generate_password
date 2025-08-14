function genPass(){
    const chars = 'abcdefghijklmnopqrstuvwyxzABCDEFGHIJKLMNOPQURSTUVWXYZ0123456789!!@#$%^&*()_+';
    let pass = '';
    const length = 12;

    for (let i = 0; i<length; i++){
        let ranNum = Math.floor(Math.random() * chars.length);
        pass += chars[ranNum];
    }

    document.getElementById("myP").textContent = pass
    
}
