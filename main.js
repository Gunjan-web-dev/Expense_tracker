transaction = [];
let bal = 0;

function addTransaction(){
    let des = document.getElementById("desc").value.trim();
    let amount = parseInt(document.getElementById("amount").value);
    let date = document.getElementById("date").value;
    let dateobj = new Date(date);
    let formatDate = dateobj.toLocaleDateString();
    const list = document.getElementById("lists");
    const trans = document.getElementById("transactions");
    let totalBal = document.getElementById("totalBalance");
    let totalIncome = document.getElementById("totalIncome");
    let totalExpense = document.getElementById("TotalExpense");

    if(des=="" || amount=="" || date==""){
        alert("Enter details!!");
    }else{
        let li = document.createElement("li");
        li.setAttribute("id","listItems");
        let desc = document.createElement("h4");
        desc.setAttribute("id","des");
        let amt = document.createElement("h4");
        amt.setAttribute("id","amt");
        let date = document.createElement("h4");
        date.setAttribute("id","dt");

        desc.textContent = `Description : ${des}`;
        amt.textContent = `Amount : ${amount}`;
        date.textContent = `Date : ${formatDate}`;
        li.appendChild(desc);
        li.appendChild(amt);
        li.appendChild(date);
        list.appendChild(li);
        transaction.push({desc,amt,dt});

        trans.style.display = "flex";

        bal = bal + amount;
        totalBal.innerHTML = `Balance : ${bal}`;
        document.getElementById("desc").value = "";
        document.getElementById("amount").value = "";
        document.getElementById("date").value = "";
    }
}
