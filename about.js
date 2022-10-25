gsap.to('.text0',{
    x:'20%',rotate:10,duration:0.85,scrollTrigger:{
      trigger:'.text0',
      scrub:true,
      start:'top 20%'
    }
  })
  gsap.to('.text2',{
    x:'20%',rotate:10,duration:0.85,scrollTrigger:{
      trigger:'.text2',
      scrub:true,
      start:'top 40%'
    }
  })
  gsap.to('.text1',{
    x:'-20%',rotate:-10,duration:0.85,scrollTrigger:{
      trigger:'.text1',
      scrub:true,
      start:'top 30%'
    }
  })
  gsap.to('.text3',{
    x:'-20%',rotate:-10,duration:0.85,scrollTrigger:{
      trigger:'.text3',
      scrub:true,
      start:'top 40%'
    }
  })
  document.querySelector('#back').addEventListener('click',()=>{
        gsap.to(window, {duration: 1, scrollTo:'body'});
  
  })
  