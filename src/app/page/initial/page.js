"use client";

// pages/initial.js
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ani from "../../../style/animation.module.css";

const InitialPage = () => {
  const router = useRouter();

  useEffect(() => {
    // 10초 후에 메인 페이지로 이동
    const timer = setTimeout(() => {
      router.push("/page/login"); // 메인 페이지로 이동
    }, 5000); // 5000ms = 5초

    // 컴포넌트 언마운트 시 타이머 정리
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex justify-center items-center bg-gray h-[100vh]">
      <h1 className={ani.smoothBlink}>
        <svg width="148" height="74" viewBox="0 0 89 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.4332 6.76454C15.5876 6.92145 18.9368 7.27014 20.9463 6.71223C22.1774 6.38098 21.9602 5.59642 21.4352 5.00364C21.236 4.77699 21.0912 4.62008 20.7291 4.44573C18.0859 3.19044 11.9125 3.66117 9.45032 4.58521C8.56322 4.91647 7.87527 5.3349 8.54512 5.8405C9.50463 6.55532 11.8944 6.65993 13.4332 6.76454Z"
            fill="white"
          />
          <path
            d="M20.0052 36.6824C19.6612 36.4209 18.9913 36.5778 18.5206 36.4383C16.4025 35.8281 13.3248 35.4794 11.2428 35.7758C10.917 35.8281 10.6092 35.9676 10.4101 36.1419C7.83929 38.1992 17.1809 38.7397 18.5568 38.6525C19.7155 38.5828 20.8379 37.9551 19.9146 37.1008C19.8603 37.0485 20.0595 36.7173 20.0052 36.6824Z"
            fill="white"
          />
          <path
            d="M29.3104 19.021C29.2199 18.0969 28.369 17.3124 28.0974 16.4058C27.6448 14.8192 27.1922 13.3198 26.0879 12.0297C23.8973 9.44935 20.367 7.84537 16.9092 7.54898C11.9306 7.13055 5.32263 8.2638 2.20874 12.3609C0.706114 14.331 0.525075 16.5104 0.832842 18.8989C1.59321 24.5826 3.58465 31.016 9.92104 33.3173C15.5152 35.3398 25.0379 35.8105 28.1699 30.3186C30.0165 27.0932 29.6725 22.5776 29.3104 19.021ZM6.42697 14.9064C7.42269 15.133 8.52703 14.6274 9.54086 14.7146C13.7591 15.0633 18.611 15.1679 22.4671 13.3547C22.3042 13.4244 21.9421 14.1916 21.8335 14.3485C21.3447 15.011 21.0731 16.2314 20.2946 16.5801C18.6834 17.3124 16.6557 17.6959 14.8815 17.8354C13.1435 17.9749 11.2064 18.0969 9.46844 17.8528C7.07872 17.539 6.71664 15.4643 6.01058 14.0521C6.1011 14.209 6.28214 14.8715 6.42697 14.9064ZM20.5662 27.7731C18.4842 29.1853 16.0402 30.336 13.4875 30.214C10.609 30.0745 7.44079 29.2551 6.15541 26.605C6.24593 26.7794 7.15113 27.1106 7.33217 27.1629C8.30979 27.5116 9.50465 27.006 10.5547 27.1455C13.5418 27.5291 16.529 27.1455 19.3351 26.1343C19.5886 26.0471 23.0464 25.5241 23.0283 25.4543C23.1369 26.4481 21.3628 27.2327 20.5662 27.7731ZM19.8058 22.5602C16.6557 23.0832 13.4332 24.0247 10.2288 23.798C7.85719 23.6237 4.32691 22.9786 4.2907 20.1542C4.2907 20.4332 5.08728 20.9911 5.28642 21.0957C6.04679 21.4967 7.16924 20.9388 8.02012 21.0782C10.5728 21.4618 13.053 21.3049 15.6238 21.0957C18.2127 20.8865 20.8558 20.7644 23.1369 19.5266C23.4085 19.3871 23.8973 19.2476 23.9697 18.9687C23.3542 21.2352 22.1593 22.1592 19.8058 22.5602Z"
            fill="white"
          />
          <path
            d="M43.0693 37.1009H40.1365V39.3674H39.3942V37.1009H36.4976V36.5256H43.0874V37.1009H43.0693ZM38.0545 33.6315H41.4762V32.7249H42.2365V35.741H37.2941V32.7249H38.0545V33.6315ZM41.4762 35.1483V34.2242H38.0545V35.1483H41.4762Z"
            fill="white"
          />
          <path
            d="M50.166 38.4434H43.5942V37.8332H46.0926V35.3923H46.853V37.8332H50.166V38.4434ZM49.4237 33.7884C49.4237 34.6426 49.4237 35.6016 49.1522 37.0138L48.3737 36.944C48.6634 35.6015 48.6634 34.6252 48.6634 33.7884V33.7012H44.3003V33.1084H49.4237V33.7884Z"
            fill="white"
          />
          <path
            d="M54.6014 34.2241C54.6014 35.1307 53.8048 35.7758 52.7186 35.7758C51.6323 35.7758 50.8176 35.1482 50.8357 34.2241C50.8357 33.3175 51.6323 32.6724 52.7186 32.6724C53.8048 32.6899 54.6014 33.3175 54.6014 34.2241ZM51.5599 34.2241C51.5599 34.782 52.0487 35.183 52.7005 35.183C53.3522 35.183 53.841 34.782 53.841 34.2241C53.841 33.6662 53.3522 33.2827 52.7005 33.2827C52.0487 33.2827 51.5599 33.6662 51.5599 34.2241ZM56.3756 38.0249H52.4832V38.7048H56.629V39.2976H51.7409V37.4844H55.6152V36.8568H51.7228V36.264H56.3756V38.0249ZM56.3756 33.8929H57.4256V34.5031H56.3756V35.9502H55.6152V32.4458H56.3756V33.8929Z"
            fill="white"
          />
          <path
            d="M61.4991 34.8169H58.9464V35.6538C60.1956 35.6538 61.137 35.6189 62.2232 35.4446L62.3137 36.0548C61.137 36.2291 60.1594 36.264 58.8016 36.264H58.2041V34.259H60.7387V33.4744H58.186V32.8817H61.4991V34.8169ZM63.7983 39.2976H59.0731V36.9091H63.7983V39.2976ZM59.8154 38.6874H63.0379V37.4844H59.8154V38.6874ZM63.7983 36.5604H63.0379V32.4458H63.7983V36.5604Z"
            fill="white"
          />
          <path
            d="M71.3838 37.2229L70.9131 37.8157C70.0984 37.4147 69.4829 36.6301 69.157 35.6886C68.8312 36.6824 68.2156 37.5367 67.3829 37.9551L66.894 37.3624C68.0165 36.8568 68.7588 35.5143 68.7588 34.2241V33.0386H69.5372V34.2241C69.5372 35.4794 70.2795 36.7347 71.3838 37.2229ZM72.9408 39.3848H72.1804V35.3399H70.5691V34.7472H72.1804V32.4458H72.9408V39.3848Z"
            fill="white"
          />
          <path
            d="M75.2218 34.7995H77.1589V33.0211H77.9193V37.7285H74.4614V33.0211H75.2218V34.7995ZM77.1589 37.1183V35.3748H75.2218V37.1183H77.1589ZM80.0193 39.3848H79.259V32.4458H80.0193V39.3848Z"
            fill="white"
          />
          <path
            d="M87.75 38.4608H81.1602V37.8506H87.75V38.4608ZM87.4603 35.8631L87.0983 36.4733C85.9577 36.2292 84.8896 35.5144 84.4189 34.538C83.9482 35.4969 82.88 36.2292 81.7395 36.4733L81.3955 35.8631C82.7533 35.619 84.0025 34.5555 84.0025 33.4222V32.8992H84.7991V33.4222C84.8172 34.5555 86.0663 35.619 87.4603 35.8631Z"
            fill="white"
          />
          <path
            d="M44.21 11.2105L45.2419 10.0946L44.6626 9.39726L44.9704 8.73474L47.0704 8.89166L47.8308 9.11831L48.8627 9.5193L48.9351 10.2864L48.3558 11.0187L48.1205 11.5068L47.8851 12.4309L46.8894 12.7621L46.1652 13.1631L45.6583 13.5641L45.2781 13.9303L42.9789 15.2204L41.1685 16.1096L40.5168 16.3014L39.865 16.3711L38.5254 16.807L37.946 16.6675L37.1313 16.1096L37.7831 15.3425L38.3986 15.0112L39.7021 14.5753L40.8065 14.0872L41.1866 13.6164L42.4539 12.9191L42.997 12.5181L43.8841 11.7335L44.21 11.2105ZM43.4858 20.1196L44.2462 20.4159L46.473 19.858H46.8894L47.0885 19.6663L47.2334 19.3699V18.934L47.1609 18.2715L47.0161 17.5392L46.7808 16.8418L46.5092 16.2142L46.1652 15.6563L46.2739 14.4359L47.1972 14.0349L47.8851 14.1395L48.5731 14.4359L49.2972 14.6276L50.2929 14.5579L50.6007 15.4122L50.6731 15.9004L50.474 16.9639L50.4378 17.731V19.3524L50.7817 19.4919L51.5059 19.5616L52.2301 19.4222L52.8094 19.3873H54.3482L55.9595 19.2827L57.3354 19.3873L58.6027 19.457L59.2544 19.9801L60.0148 20.4508L60.5217 21.3748L60.0329 22.142L59.2363 22.3686L58.5846 22.5081L57.9328 22.2814L57.2811 22.142L56.6293 22.4384L53.2077 22.1071H52.0128L50.7093 22.1768H50.0576L49.4421 22.142L48.6817 22.0374L47.9937 22.0025L47.3058 22.0374L46.6178 22.1768L45.8937 22.4384L45.1695 22.2466L44.554 22.2814L43.3953 22.543L42.0556 22.7347L39.9918 23.2055L38.3081 22.5081L37.8555 21.9851L37.5477 20.8344L37.6202 20.1719L38.815 20.2416L40.2633 20.6077L40.8427 20.5031L42.2548 20.4334L42.9427 20.3288L43.4858 20.1196ZM50.999 5.45703L53.262 4.934L53.8413 4.86426L55 5.12578L55.6155 5.31756L56.3759 5.64882L56.3035 7.35741L55.5069 7.51432L53.6241 8.03736L52.7732 7.74097L52.1939 7.81071L51.6145 7.95019L50.999 7.98506L50.311 7.75841L49.7679 8.01992L47.8127 8.1594H47.1609L46.2014 8.26401L45.6945 8.45579H45.1152L44.5359 8.49066H43.9203L43.3048 8.52553H42.6169L41.9289 8.5604L41.0056 8.07223L41.0418 6.78207L41.6935 6.55542L42.3634 6.45081L43.7393 6.31133L45.079 6.11955L45.6945 6.27646L46.5816 6.20672L47.1972 6.04981L47.8851 5.9452L49.0076 5.8406L50.999 5.45703ZM55.7603 11.7684L56.2129 12.797L56.3216 13.8257L56.0862 14.1569L55.5974 14.3487H54.7827L53.9862 14.1918L53.1896 13.8954L52.6465 13.4944L52.0671 13.198L51.4516 13.0062L50.8361 12.8667H50.1843L49.08 12.3088L48.4282 11.8381L48.9713 11.1059L49.4239 10.6351L50.2386 10.4433L52.3025 10.8443L54.2939 11.3325L55.7603 11.7684Z"
            fill="white"
          />
          <path
            d="M66.3148 17.3824L64.7398 17.8705H64.3234L62.857 17.3126L62.2414 16.5281L61.9699 15.9353L61.8975 14.6451L62.5854 14.6103L63.5811 14.9415L64.088 14.9938L65.2105 14.8369L66.3329 14.9938H66.9847L67.6726 14.9241L68.9399 14.5928L69.5917 14.6626L70.8951 14.959L71.2029 14.558H73.8823L74.6427 14.5928H75.4392L75.9824 14.4359L77.1772 14.279L77.7928 14.1395L78.3721 13.8431L79.3678 13.9129H79.9833L80.4359 13.8431L81.5403 13.5467L82.1196 13.4421L82.8076 13.3724L83.5679 13.4073H84.3283L85.9395 15.1507L86.5189 15.2902L87.3154 15.9527L86.6999 16.8768L86.012 17.7659H85.0524L84.1291 16.9465L81.8662 16.5804H81.2144L80.5627 16.685L79.9471 16.7199H79.3316L78.7161 16.5804L78.2091 16.5106L77.485 16.5804L76.6884 16.7199L75.9643 16.9116L75.4754 17.1383L74.7513 16.9116L74.172 17.0162L73.484 17.086H73.0676L72.4521 17.0511L71.8728 17.086L71.2572 17.2255L70.6417 17.2952H70.0261L69.3744 17.2603H68.7951L68.2157 17.3649L67.6726 17.5218L66.9485 17.6264L66.3148 17.3824ZM65.5907 6.1196L65.8984 5.56169L66.2062 4.79457H67.8537L70.5693 4.3064L71.221 4.23666L73.2124 4.13206L73.828 4.06232L74.4435 3.90541L75.0228 3.67876L75.6746 3.53928L76.3263 3.87054L76.9781 3.57415L77.6298 3.41724H78.2816L78.9695 3.52184L79.6213 3.74849L80.617 4.53305L81.3411 4.93405L81.0696 6.32882L80.2187 6.5206H79.4583L78.1548 6.41599H77.485L76.8332 6.55547L76.1815 6.81699L75.8013 6.74725L75.222 6.71238H74.6789L73.4116 6.86929H72.7598L72.271 6.76468L70.8046 6.99133L70.8408 7.65385L71.1124 8.8394L71.04 9.20553L71.2391 9.39731L72.0357 9.32757L72.4159 9.13579L73.0314 9.06605L73.6469 9.10092L74.2987 8.94401L76.7065 8.08971L77.8652 7.79333L78.4083 8.15945L79.6394 8.59532L80.2549 8.85684L80.9428 9.22296V10.5829L80.2187 10.8444L78.6436 11.6987L77.9195 11.5069L77.2315 11.4023L76.5074 11.3674H75.1315L74.7875 11.6289H72.5245L71.8003 11.4895L70.877 11.751L70.3339 11.9428L69.7546 12.0474L68.3787 11.8556L68.1795 11.0885L67.6726 9.72857L67.3468 7.86306L67.7269 7.37489L68.1795 6.9739L67.6907 6.83442H67.2381L66.5864 6.93903L66.1338 6.67751L65.5907 6.1196ZM78.8609 20.3811L79.3497 20.7821L79.7661 21.3052L80.273 21.8282L80.3816 23.2753V23.9727L80.2368 24.7049L79.929 25.4023L79.4221 25.9253L79.0057 26.7796L78.5893 27.2504L77.9738 27.7211L77.2496 28.0523L76.5255 28.3139L75.8375 28.4185L74.3892 28.2267L73.5745 28L72.7236 27.8606L71.9995 27.5293L71.3477 27.0934L69.6641 25.5069L69.5554 24.7746L69.0666 23.5891L69.2115 22.9266L69.4106 22.2989L69.6822 21.6713L69.8451 21.1134L70.4969 20.5206L71.1486 20.1196L71.8003 19.8581L72.4521 19.6663L73.2124 19.6314L73.9366 19.4397L75.3487 19.213L75.928 19.2827L76.5436 19.4222L78.8609 20.3811ZM77.3583 24.1121L77.2134 23.0835L77.0505 22.4558L76.6703 22.0897L76.3625 21.8631L75.9824 21.7062H75.4935L74.0271 21.8979H73.6107L73.1038 22.1943L72.4521 23.0486L72.3797 23.746L72.5788 24.4085L73.1581 25.2279L73.6469 25.5243L74.1539 25.7161L74.6608 25.8556L75.2763 25.9253L76.0367 25.7335L76.4169 25.5069L76.6884 25.1059L77.0324 24.7398L77.3583 24.1121Z"
            fill="white"
          />
        </svg>
      </h1>
    </div>
  );
};

export default InitialPage;
