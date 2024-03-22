const outputDiv = document.getElementById('output');

clique = async () => {
    console.log('clique'); 
    const count = document.getElementById('input').value;
    const response = await fetch(`/generate-ipsum?count=${count}`);
    const data = await response.json();
    outputDiv.innerHTML = data.loremIpsum;
};