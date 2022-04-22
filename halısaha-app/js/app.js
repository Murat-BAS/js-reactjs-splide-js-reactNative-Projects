let allInfoArray = [];

function submitFunction() {

    //Fiyat Bilgisi
    let pricePicker = document.querySelector('#priceSelected')
    let priceValue = pricePicker.options[pricePicker.selectedIndex]
    let priceInfo = priceValue.innerHTML;

    // Zaman bilgisi
    let timePickerDOM = document.querySelector('#timePicker')
    let timeValue = timePickerDOM.options[timePickerDOM.selectedIndex];
    let timeInfo = timeValue.innerHTML;

    // Gün bilgisi
    let dayPickerDOM = document.querySelector('#dayPicker')
    let selectedDay = dayPickerDOM.options[dayPickerDOM.selectedIndex];
    let selectedDayInfo = selectedDay.innerHTML;

    //----NOT-----//
    //Bilgileri burda tanımlamamızın sebebi dışarda tanımlarsak sürekli aynı index değerini alır ve sürekli aynı indexi kayıt eder.
    // Burda alırsak her tıkladığımızda boxlarda ki veriyi tekrar çeker ve bize güncel bilgiyi verir.
    //------ -------//

    if (Array.isArray(allInfoArray)) {// Array bilgisnin kontrolünü yapıyoruz
        allInfoArray.push({// Dizinin içine biligleri obje şeklinde tanımlıyoruz
            day: selectedDayInfo,
            time: timeInfo,
            price: priceInfo,
        });
    } else {
        console.log('Array Error');//Eğer array sağlanmazsa hata kontrolü için mesaj bırakıyoruz
    }
    console.log(allInfoArray)
}

// submitFunction();

let reusltInfo = 0;
let resultInfo = 0;
let hideDOM = document.querySelector('#rquestArea')

function requestFunction(resultVeriable) {

    for (let index = allInfoArray.length - 1; index < allInfoArray.length; index++) {//Burda allInfoArray.length - 1 dememizin sebebi son değere ulaşmaktır
        let requestDayInfo=allInfoArray[index].day
        let requesttimeInfo=allInfoArray[index].time
        let requestPriceInfo = allInfoArray[index].price

        let requestDOM = document.querySelector('#requestCON')//Burda çektigimiz genel divin içinde yazdırdık çünkü yeni değer eklendiğinde mevcut değeri silip yerine yenisini yazdırmasını istiyoruz
        let addDiv = document.createElement('div')
        requestDOM.append(addDiv);
        requestDOM.innerHTML=`En son eklenen bilgi: ${requestDayInfo} / ${requestPriceInfo} / ${requesttimeInfo}`


    }

    for (let index = 0; index < allInfoArray.length; index++) {
        resultVeriable = parseInt(allInfoArray[index].price)// Burda objenin içinde ki price değerini Int yani sayısal değer dönüştürdük
        resultInfo += resultVeriable;// Dönüştütülen değeri toplama yapabılmek için attığımız değişken ile sonuc değişkenine ekledik += ile her defasında yeni girilen değeri değişkene atadık

        let requestDOM = document.querySelector('#rquestArea')
        let addDiv = document.createElement('div')
        requestDOM.append(addDiv);
        requestDOM.innerHTML = `Toplam Fiyat: ${resultInfo}`
    }
}

requestFunction(reusltInfo)



function allInfoVeriable(){

    let veriableDivDOM=document.querySelector('#allInfoVeriableDiv')
    let addDivTitle=document.createElement('h5')
    addDivTitle.innerHTML=`KAYITLAR`
    veriableDivDOM.append(addDivTitle)

    for (let index = 0; index < allInfoArray.length; index++) {
        let veriableInfoDay=allInfoArray[index].day
        let veriableInfoTime=allInfoArray[index].time
        let veriableInfoPrice=allInfoArray[index].price
        
        let veriableDivDOM=document.querySelector('#allInfoVeriableDiv')
        let addDivInfo=document.createElement('div')
        veriableDivDOM.append(addDivInfo)
        addDivInfo.innerHTML=`${index} - ${veriableInfoDay} / ${veriableInfoTime} / ${veriableInfoPrice}`
    }

}

allInfoVeriable()