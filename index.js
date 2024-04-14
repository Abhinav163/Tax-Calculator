function calculateTax() {
    const grossinc = parseFloat(document.getElementById('grossinc').value);
    const extinc = parseFloat(document.getElementById('extinc').value);
    const ded = parseFloat(document.getElementById('ded').value);
    const age = document.getElementById('age').value;
    const isValidInput = !isNaN(grossinc) && !isNaN(extinc) && !isNaN(ded);
    if (!isValidInput) {
        document.querySelectorAll('.ei').forEach(icon => icon.style.color="red");
        document.querySelectorAll('input[type="number"]').forEach(input => {
            if (isNaN(parseFloat(input.value))) {
                input.classList.add('ef');
                input.nextElementSibling.style.color="red";
            } else {
                input.classList.remove('ef');
                input.nextElementSibling.style.color="black";
            }
        });
        return;
    }
    const overinc = grossinc + extinc - ded;
    let tax = 0;
    if (overinc > 800000) {
        if (age === '<40') {
            tax = 0.3 * (overinc - 800000);
        } else if (age === '40-60') {
            tax = 0.4 * (overinc - 800000);
        } else if (age === '≥60') {
            tax = 0.1 * (overinc - 800000);
        }
    }
    const mode = document.getElementById('res');
    const result = document.getElementById('result');
    result.style.display = 'block';
    mode.innerHTML = `<p>Your calculated tax: ₹${tax.toFixed(2)}</p>`;

    document.getElementById('form').style.boxShadow = '0';
}
function back(){
    const mode = document.getElementById('result');
    mode.style.display = 'none';
    window.location.reload();
}
document.addEventListener("DOMContentLoaded", function() {
    const Qi = document.querySelector('.fa-regular.fa-circle-question');
    const instruc = document.getElementById('inst1');
    Qi.addEventListener("mouseenter", function() {
        instruc.style.display = "block";
    });
    Qi.addEventListener("mouseleave", function() {
        instruc.style.display = "none";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const Qi = document.getElementById("icon2");
    const instruc = document.getElementById('inst2');
    Qi.addEventListener("mouseenter", function() {
        instruc.style.display = "block";
    });
    Qi.addEventListener("mouseleave", function() {
        instruc.style.display = "none";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const Qi = document.getElementById("icon3");
    const instruc = document.getElementById('inst3');
    Qi.addEventListener("mouseenter", function() {
        instruc.style.display = "block";
    });
    Qi.addEventListener("mouseleave", function() {
        instruc.style.display = "none";
    });
});
