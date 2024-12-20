const numberCartInp = document.querySelectorAll("#inp-num-cart>input"),
  date = document.querySelectorAll("#date>input"),
  divNumbedr = document.querySelector("#divnumbedr"),
  nameBank = document.querySelector("#name-bank"),
  btnSubmit = document.querySelector("#btn-submit"),
  img = document.querySelector("#img"),
  passwordTwo = document.querySelector("#password-two"),
  boxCaptcha = document.querySelector("#box-captcha"),
  cvv2 = document.querySelector("#cvv2"),
  captcha = document.querySelector("#captcha");
let x = null;
numberCartInp.forEach((inp, i) => {
  inp.addEventListener("click", (e) => {
    if (
      !inp.value &&
      i > 0 &&
      !inp.previousElementSibling.previousElementSibling.value
    ) {
      numberCartInp[0].focus();
    }
  });
  inp.addEventListener("input", (e) => {
    if (i < 4 && inp.value.length === 4) {
      inp.nextElementSibling.nextElementSibling.focus();
    } else if (i == 4 && inp.value.length < 5 && inp.value.length === 3) {
      // inp.value = inp.value.slice(0, 3);
      inp.parentElement.nextElementSibling.children[0].focus();
    }
    let fullNumber =
      numberCartInp[0].value +
      numberCartInp[1].value +
      numberCartInp[2].value +
      numberCartInp[3].value +
      numberCartInp[4].value;
    let numberSlice = fullNumber.slice(-4);
    divNumbedr.innerHTML = numberSlice.padStart(fullNumber.length, "*");
    x = fullNumber.slice(0, 6);
    console.log(x);

    switch (+x) {
      case 627412:
        nameBank.innerHTML = "بانک اقتصاد نوین";
        img.src = "assets/img/EnbankNewLog-100x18.png";
        break;
      case 627381:
        nameBank.innerHTML = "بانک انصار";
        img.src = "assets/img/BAnsar.png";
        break;
      case 505785:
        nameBank.innerHTML = "بانک ایران زمین";
        img.src = "assets/img/Iranzamin-logo.svg.png";

        break;
      case 622106:
        nameBank.innerHTML = "بانک پارسیان";
        img.src = "assets/img/Parsian_bank_logo.png";

        break;
      case 639194:
        nameBank.innerHTML = "بانک پارسیان";
        img.src = "assets/img/Parsian_bank_logo.png";

        break;
      case 639347:
        nameBank.innerHTML = "بانک پاسارگاد";
        img.src = "assets/img/BPasargad.webp.png";
        break;
      case 502229:
        nameBank.innerHTML = "بانک پاسارگاد";
        img.src = "assets/img/BPasargad.webp.png";
        break;
      case 636214:
        nameBank.innerHTML = "بانک تات";
        break;
      case 627353:
        nameBank.innerHTML = "بانک تجارت";
        img.src = "assets/img/Tejarat_Bank_Logo.svg.png";

        break;
      case 502908:
        nameBank.innerHTML = "بانک توسعه تعاون";
        img.src = "assets/img/TTBank.svg.png";

        break;
      case 627648:
        nameBank.innerHTML = "بانک توسعه صادرات ایران";
        img.src = "assets/img/7.png";
        break;
      case 207177:
        nameBank.innerHTML = "بانک توسعه صادرات ایران";
        img.src = "assets/img/7.png";
        break;
      case 636949:
        nameBank.innerHTML = "بانک حکمت ایرانیان";
        img.src = "assets/img/Bank_hekmat.jpg";
        break;
      case 502938:
        nameBank.innerHTML = "بانک دی";
        img.src = "assets/img/Day_Bank_Logo.svg.png";
        break;
      case 589463:
        nameBank.innerHTML = "بانک رفاه کارگران";
        img.src = "assets/img/rfk.png";
        break;
      case 621986:
        nameBank.innerHTML = "بانک سامان";
        img.src = "assets/img/saman.png";
        break;
      case 589210:
        nameBank.innerHTML = "بانک سپه";
        img.src = "assets/img/sepah.png";
        break;
      case 502806:
        nameBank.innerHTML = "بانک شهر";
        img.src = "assets/img/Bank_shahr_logo.png";
        break;
      case 639346:
        nameBank.innerHTML = "بانک سینا";
        img.src = "assets/img/sina.png";
        break;
      case 639607:
        nameBank.innerHTML = "بانک سرمایه";
        img.src = "assets/img/sarmaye.png";
        break;
      case 603769:
        nameBank.innerHTML = "بانک صادرات ایران";
        img.src = "assets/img/saderat.png";
        break;
      case 627961:
        nameBank.innerHTML = "بانک صنعت و معدن";
        img.src = "assets/img/sanat.png";
        break;
      case 606373:
        nameBank.innerHTML = "بانک قرض الحسنه مهر ایران";
        img.src = "assets/img/mehiran.png";
        break;
      case 639599:
        nameBank.innerHTML = "بانک قوامین";
        img.src = "assets/img/ghavamin.png";
        break;
      case 627488:
        nameBank.innerHTML = "بانک کار افرین";
        img.src = "assets/img/karafarin.png";
        break;
      case 502910:
        nameBank.innerHTML = "بانک کار افرین";
        img.src = "assets/img/karafarin.png";
        break;
      case 603770:
        nameBank.innerHTML = "بانک کشاورزی";
        img.src = "assets/img/keshavarzi.png";
        break;
      case 639217:
        nameBank.innerHTML = "بانک کشاورزی";
        img.src = "assets/img/keshavarzi.png";
        break;
      case 610433:
        nameBank.innerHTML = "بانک ملت";
        img.src = "assets/img/melat.png";
        break;
      case 991975:
        nameBank.innerHTML = "بانک ملت";
        img.src = "assets/img/melat.png";
        break;
      case 505416:
        nameBank.innerHTML = "بانک گردشگری";
        img.src = "assets/img/gardeshgari.png";
        break;
      case 636795:
        nameBank.innerHTML = "بانک مرکزی";
        img.src = "assets/img/credit-card-svgrepo-com.svg";
        break;
      case 628023:
        nameBank.innerHTML = "بانک مسکن";
        img.src = "assets/img/maskan.png";
        break;
      case 603799:
        nameBank.innerHTML = "بانک ملی ایران";
        img.src = "assets/img/meli.png";
        break;
      case 639370:
        nameBank.innerHTML = "بانک مهر اقتصاد";
        img.src = "assets/img/Mehr-eghtesad.png";
        break;
      case 627760:
        nameBank.innerHTML = " پست بانک ایران ";
        img.src = "assets/img/post.png";
        break;
      case 628157:
        nameBank.innerHTML = "موسسه اعتباری توسعه ";
        img.src = "assets/img/credit-card-svgrepo-com.svg";

        break;
      case 505801:
        nameBank.innerHTML = "موسسه اعتباری کوثر ";
        img.src = "assets/img/kosar.png";
        break;
      case 627884:
        nameBank.innerHTML = "بانک پارسیان  ";
        img.src = "assets/img/Parsian_bank_logo.png";

        break;
      case 585983:
        nameBank.innerHTML = "بانک تجارت  ";
        img.src = "assets/img/Tejarat_Bank_Logo.svg.png";

        break;
      default:
        nameBank.innerHTML = "";
        img.src = "assets/img/credit-card-svgrepo-com.svg";
    }
  });
  inp.addEventListener("keydown", (e) => {
    if (e.keyCode === 8 && i > 0 && inp.value.length == 0) {
      inp.previousElementSibling.previousElementSibling.focus();
    }
  });
  inp.addEventListener("paste", (e) => {
    e.preventDefault();
  });
});

const fonts = ["cursive", "Arial", "Helvetica Neue", "Helvetica", "sans-serif"];
let captchaValue = "";
let valueCaptcha = () => {
  let value = btoa(Math.random() * 1000000000);
  console.log(value);

  value = value.substr(0, 5 + Math.random() * 3);
  captchaValue = value.toLowerCase();
};
let itemCaptcha = () => {
  let html = captchaValue.split("").map((char) => {
    let rotate = -20 + Math.trunc(Math.random() * 30);
    let font = Math.trunc(Math.random() * fonts.length);
    return `<span
      style="
      transform:rotate(${rotate}deg);
      font-family:${fonts[font]};
      "
     >${char} </span>`;
  });
  captcha.firstElementChild.innerHTML = html;
};

let refreshCaptcha = () => {
  captcha.children[1].addEventListener("click", () => {
    valueCaptcha();
    itemCaptcha();
  });
  valueCaptcha();
  itemCaptcha();
};
refreshCaptcha();
console.log(captcha[1]);
btnSubmit.addEventListener("click", function () {
  let inputcaptchavalue = boxCaptcha.value.toLowerCase();

  if (
    !numberCartInp[1].value &&
    !numberCartInp[0].value &&
    !numberCartInp[1].value &&
    !numberCartInp[0].value
  ) {
    Swal.fire({
      title: "خطا",
      text: "شماره کارت را وارد نمایید",
    });
  } else if (!nameBank.innerHTML) {
    Swal.fire({
      title: "خطا",
      text: "شماره کارت صحیح  نمی باشد",
    });
  } else if (!passwordTwo.children[0].value) {
    Swal.fire({
      title: "خطا",
      text: "رمز دوم را وارد نمایید",
    });
  } else if (!cvv2.children[0].value) {
    Swal.fire({
      title: "خطا",
      text: "رمز اینترنتی را وارد نمایید",
    });
  } else if (!date[0].value ) {
    Swal.fire({
      title: "خطا",
      text: "تاریخ انقضا کارت را وارد نمایید",
    });
  } else if(!date[1].value) {
    Swal.fire({
      title: "خطا",
      text: "تاریخ انقضا کارت را وارد نمایید",
    });
  } else if (inputcaptchavalue != captchaValue) {
    Swal.fire({
      title: "خطا",
      text: "کد امنیتی را وارد نمایید",
    });  } else if (
    inputcaptchavalue === captchaValue &&
    passwordTwo.children[0].value &&
    cvv2.children[0].value &&
    date[0].value &&
    date[1].value &&
    numberCartInp[1].value &&
    numberCartInp[0].value &&
    numberCartInp[1].value &&
    numberCartInp[0].value
  ) {
    Swal.fire({
      text: "با موفقیت ثبت شد",
    });
  }
});
function eateNumber(event) {
  event.target.value = event.target.value.slice(0, 2);
  console.log(event.target.value);
}
