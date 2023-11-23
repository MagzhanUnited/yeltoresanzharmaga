function openModal() {
    document.getElementById('myModal').style.display = 'flex';
}
function openLoginModal() {
    openModal();
    document.getElementById('loginModalContent').style.display = 'block';
    document.getElementById('verificationModalContent').style.display = 'none';
}
function openVerificationModal() {
    openModal();
    document.getElementById('verificationModalContent').style.display = 'block';
    document.getElementById('loginModalContent').style.display = 'none';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}