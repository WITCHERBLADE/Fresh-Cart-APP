function Profile(){
  return(
<div className="profile-con">
<img src="https://freshcart.codescandy.com/assets/images/logo/freshcart-logo.svg"className="logo"/>
<div className="profile">
    <form >
  <div class="row mb-3">
    
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" placeholder="example@gmail.com" style={{width:"300px",margin:"25px 0"}}/>
    </div>
  </div>
  <div class="row mb-3">
    
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" placeholder="create Password" style={{width:"300px"}}/>
    </div>
  </div>

 
  <button type="submit" class="btn color 	--bs-dark-border-subtle" style={{width:"300px",margin:"25px 0"}}>Sign in</button>
</form>
</div>
<div className="img">
  <img src="https://freshcart.codescandy.com/assets/images/slider/slide-1.jpg"/>
</div>
</div>
  )
}

export default Profile;