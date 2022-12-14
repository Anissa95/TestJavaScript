const oppoStatus = [
  {
    "K_OPPO_STATUS": 1,
    "STATUS": "1. Initial Contact",
    "SUCCESS": 0
  },
  {
    "K_OPPO_STATUS": 2,
    "STATUS": "2. Demonstration",
    "SUCCESS": 25
  },
  {
    "K_OPPO_STATUS": 3,
    "STATUS": "3. Proposal",
    "SUCCESS": 50
  },
  {
    "K_OPPO_STATUS": 4,
    "STATUS": "4. Negotiation",
    "SUCCESS": 75
  },
  {
    "K_OPPO_STATUS": 5,
    "STATUS": "5. Order",
    "SUCCESS": 100
  }
];

const FormComponent = class {
  constructor() {
      this.form = document.querySelector("form")
      this.select = document.querySelector("[name='status']")
      this.input = document.querySelector("[name='success']")
      this.button = document.querySelector("button")
  }

  // Start modifying the form elements here!
  // You are allowed to add extra methods, properties or change the constructor of this class
  start() {
      this.setAttributes()
      this.setSelectOptions()
      this.setInput(oppoStatus[0].STATUS)
      this.setSubmitHandler()
  }

  // Attribution d'un id a l'input et au bouton
  // Préparation de l'affichage du JSON généré en remplaçant le contenu de la div
  setAttributes() {
      this.input.setAttribute("id", "successInput")
      this.button.setAttribute("id", "submitButton")

      const parentContent = document.createElement("div")
      const childContent = document.getElementById("submitButton")

      parentContent.appendChild(childContent.cloneNode(true))
      childContent.parentNode.replaceChild(parentContent, childContent)
  }


  // Création des options du select à partir du tableau oppoStatus
  setSelectOptions() {
      this.select.addEventListener("change", (event) => this.setInput(event.target.value))
            
      oppoStatus.forEach((element) => {
          let elementOption = document.createElement("option")

          elementOption.value = element.K_OPPO_STATUS
          elementOption.text = element.STATUS
          this.select.appendChild(elementOption)
      })
  }

  // Remplissage du input de la valeur correspondante a l'option choisie precedemment
  setInput(value) {
      if (value) {
          const successInput = oppoStatus.find((element) => element.K_OPPO_STATUS === parseInt(value))
          if (successInput) this.input.value = successInput.SUCCESS
      }
  }

  // Affichage du JSON généré dès qu'on submit le formulaire
  setSubmitHandler() {
      this.form.addEventListener("submit", (event) => {
          event.preventDefault()

          const formData = new FormData(this.form)
          const formOutput = document.getElementsByClassName("output")[0]

          const valuesData = [...formData.entries()]
          const valueOutput = valuesData.map(([key, value]) => [key, Number(value)])

          formOutput.textContent = JSON.stringify(Object.fromEntries(valueOutput))
      })
  }
}

// On check si window existe et on attend que la page se charge pour
// que les méthodes soient executees
window && window.addEventListener("load", () => {
  const fc = new FormComponent()
  fc.start()
})