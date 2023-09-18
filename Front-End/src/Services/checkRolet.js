export function checkAdmin(){
    const roli = (localStorage.getItem("user_role"));
    if (roli === "Admin"){
      return true;
    }
  }
  
  export function checkUser(){
    const roli = (localStorage.getItem("user_role"));
    if (roli ==="User"){
      return true;
    }
  }
  
 