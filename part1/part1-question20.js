function time(){
    let d=new Date();
    let time = d.toLocaleDateString();
    console.log(time);
    }
    
    setInterval(time,1000);
    