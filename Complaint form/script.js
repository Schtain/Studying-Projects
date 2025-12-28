const fullNameInput = document.getElementById('full-name');
const emailInput = document.getElementById('email');
const orderNumberInput = document.getElementById('order-no');
const productCodeInput = document.getElementById('product-code');
const quantityInput = document.getElementById('quantity');

const complaintsGroupContainer = document.getElementById('complaints-group');
const complaintsGroup = complaintsGroupContainer.querySelectorAll('input[type="checkbox"]');

const otherComplaint = document.getElementById('other-complaint');
const complaintDescriptionContainer = document.getElementById('complaint-description-container');
const complaintDescription = document.getElementById('complaint-description');

const solutionGroup = document.getElementById('solutions-group');
const solutionOptions = solutionGroup.querySelectorAll('input[name="solutions"]')

const otherSolution = document.getElementById('other-solution');
const solutionDescriptionContainer = document.getElementById('solution-description-container');
const solutionDescription = document.getElementById('solution-description');


const submitBtn = document.getElementById('submit-btn');

const form = document.getElementById('form');


// Name Validation
function nameIsValid() {
  return fullNameInput.value.trim() !== "";
}
fullNameInput.addEventListener('change', () => {
  const isValid = nameIsValid();
  if (isValid) {
    fullNameInput.classList.add('valid');
    fullNameInput.classList.remove('invalid');
    fullNameInput.setCustomValidity('');
  }
  else {
    fullNameInput.classList.add('invalid');
    fullNameInput.classList.remove('valid');
    fullNameInput.setCustomValidity('Name can not be empty!');
  }
  fullNameInput.reportValidity();
});

//Email Validation
function isEmailValid() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
  return emailRegex.test(emailInput.value);
}
emailInput.addEventListener('change', (e) => {
  const validEmail = isEmailValid();
  if (validEmail) {
    emailInput.classList.add('valid');
    emailInput.classList.remove('invalid');
    emailInput.setCustomValidity('');
  }
  else {
    emailInput.classList.add('invalid');
    emailInput.classList.remove('valid');
    emailInput.setCustomValidity("Input a valid forman email!");
  }
  emailInput.reportValidity();
})

//Order Number Validation 2024###### 6 цифр
function isOrderNumberValid() {
  const orderNumberRegex = /^2024\d{6}$/;
  return orderNumberRegex.test(orderNumberInput.value);
}
orderNumberInput.addEventListener('change', () => {
  const isValid = isOrderNumberValid();
  if (isValid) {
    orderNumberInput.classList.add('valid');
    orderNumberInput.classList.remove('invalid');
    orderNumberInput.setCustomValidity('');
  }
  else {
    orderNumberInput.classList.add('invalid');
    orderNumberInput.classList.remove('valid');
    orderNumberInput.setCustomValidity("Input a valid order number: 2024######");
  }
  orderNumberInput.reportValidity();
})

// Product Code Validation XX##-X###-XX#  X=[A-Za-z] #=number
function isProductCodeValid() {
  const productCodeRegex = /^[a-z]{2}\d{2}\-[a-z]\d{3}\-[a-z]{2}\d$/i;
  return productCodeRegex.test(productCodeInput.value);
}

productCodeInput.addEventListener('change', () => {
  const isValid = isProductCodeValid();
  if (isValid) {
    productCodeInput.classList.add('valid');
    productCodeInput.classList.remove('invalid');
    productCodeInput.setCustomValidity('');
  }
  else {
    productCodeInput.classList.add('invalid');
    productCodeInput.classList.remove('valid');
    productCodeInput.setCustomValidity("Input a valid product code X-letter \#-digit!");
  }
  productCodeInput.reportValidity();
})

//quantity validity MUST BE A POSITIVE INTEGER
function isQuantityValid() {
  const quantityRegex = /^[1-9]\d*$/;
  return quantityRegex.test(quantityInput.value);
}

quantityInput.addEventListener('change', () => {
  const isValid = isQuantityValid();
  if (isValid) {
    quantityInput.classList.add('valid');
    quantityInput.classList.remove('invalid');
    quantityInput.setCustomValidity('');
  }
  else {
    quantityInput.classList.add('invalid');
    quantityInput.classList.remove('valid');
    quantityInput.setCustomValidity("Inpun number of producs");
  }
  quantityInput.reportValidity();
})

// CHECKOBXES validation
function complaintsGroupsValidation() {
  const isChecked = (element) => element.checked;
  return Array.from(complaintsGroup).some(isChecked);
}

complaintsGroupContainer.addEventListener('change', () => {
  const isValidGroup = complaintsGroupsValidation();
  if (isValidGroup) {
    complaintsGroupContainer.classList.add('valid');
    complaintsGroupContainer.classList.remove('invalid');
  }
  else {
    complaintsGroupContainer.classList.add('invalid');
    complaintsGroupContainer.classList.remove('valid');
  }
})
// DESCRIPTION OF COMPLAIN REASON HANDLER
otherComplaint.addEventListener('change', (e) => {
  if (e.target.checked) {
    complaintDescriptionContainer.removeAttribute('hidden');
    complaintDescription.setAttribute('required', 'required');
  }
  else {
    complaintDescription.removeAttribute('required');
    complaintDescriptionContainer.setAttribute('hidden', '');
  }
})
complaintDescription.addEventListener('change', () => {
  let isValid = isComplaintDescriptionValid();
  if (!otherComplaint.checked) {
    isValid = true;
  }
  if (isValid) {
    complaintDescription.classList.add('valid');
    complaintDescription.classList.remove('invalid');
    complaintDescription.setCustomValidity('');
  } else {
    complaintDescription.classList.add('invalid');
    complaintDescription.classList.remove('valid');
    complaintDescription.setCustomValidity('The complaint must be at least 20 chars long');
  }
  complaintDescription.reportValidity();
})
// complaintDescription validation
function isComplaintDescriptionValid() {
  if (!otherComplaint.checked) {
    return true
  }
  else {
    return complaintDescription.value.length >= 20;
  }
}

// Solutions validation
function solutionsValidation() {
  const isChecked = (element) => element.checked;
  return Array.from(solutionOptions).some(isChecked);
}

solutionGroup.addEventListener('change', () => {
  const isSolutionGroupValid = solutionsValidation();
  if (isSolutionGroupValid) {
    solutionGroup.classList.add('valid');
    solutionGroup.classList.remove('invalid');
  } else {
    solutionGroup.classList.add('invalid');
    solutionGroup.classList.remove('valid');
  }
})
solutionGroup.addEventListener('change', (e) => {
  if (otherSolution.checked) {
    solutionDescriptionContainer.removeAttribute('hidden');
    solutionDescription.setAttribute('required', 'required');
  }
  else {
    solutionDescriptionContainer.setAttribute('hidden', '');
    solutionDescription.removeAttribute('required');
  }
})
// Solution description VALIDATION

solutionDescription.addEventListener('change', () => {
  let isValid = validateSolutionDescription();
  if (!otherSolution.checked) {
    isValid = true;
  }
  if (isValid) {
    solutionDescription.classList.add('valid')
    solutionDescription.classList.remove('invalid');
    solutionDescription.setCustomValidity('');
  } else {
    solutionDescription.classList.add('invalid')
    solutionDescription.classList.remove('valid');
    solutionDescription.setCustomValidity('Solution must be at least 20 chars long!');
  }
  solutionDescription.reportValidity();
})

function validateSolutionDescription() {
  if (!otherSolution.checked) {
    return true;
  }
  else {
    return solutionDescription.value.length >= 20;
  }
}

// !ВАЛИДАЦИЯ ФОРМЫ

function validateForm() {
  let information = {
    "full-name": false,
    "email": false,
    "order-no": false,
    "product-code": false,
    "quantity": false,
    "complaints-group": false,
    "complaint-description": false,
    "solutions-group": false,
    "solution-description": false
  };
  information['full-name'] = nameIsValid();
  information['email'] = isEmailValid();
  information['order-no'] = isOrderNumberValid();
  information['product-code'] = isProductCodeValid();
  information['quantity'] = isQuantityValid();
  information['complaints-group'] = complaintsGroupsValidation();
  information['complaint-description'] = isComplaintDescriptionValid()
  information['solutions-group'] = solutionsValidation();
  information['solution-description'] = validateSolutionDescription();
  return information;
};

function isValid(validationResult) {
  return Object.values(validationResult).every(Boolean);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const validationResult = validateForm();
  const formIsValid = isValid(validationResult);
})
