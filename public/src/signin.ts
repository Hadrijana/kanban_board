import './form.css'
import Service from './Service'

 
class SignTab {
    btn: HTMLButtonElement;
    name: string;
    constructor(btn : HTMLButtonElement) {
        this.btn = btn;
        this.name = "sign" + this.btn.id
        this.addListeners()
    }

    addListeners =()=>{
        this.btn.addEventListener("click", this.openTab )
    }

    openTab=(e: Event)=> {
        // Declare all variables
        let i, tabcontent, tablinks;
      
        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          (tabcontent[i]as HTMLElement).style.display = "none";
        }
      
        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
      
        // Show the current tab, and add an "active" class to the button that opened the tab
        (document.getElementById(this.name)as HTMLElement).style.display = "block";
        (e.currentTarget as HTMLElement).className += " active";
      }
    
}

document.querySelectorAll<HTMLButtonElement>(".tablinks").forEach((btn)=>{
    new SignTab(btn)
})

const signUpHandler =()=>{
  const formElements = (document.getElementById("SingUpForm")as HTMLFormElement).elements;
  const username = (formElements[0]as HTMLInputElement).value
  const password = (formElements[1]as HTMLInputElement).value

  if((formElements[1]as HTMLInputElement).value !== (formElements[2]as HTMLInputElement).value) {
    return false
  }
  Service.register(username, password)
  return true
}

document.getElementById("SingUpForm")?.addEventListener("submit", signUpHandler)