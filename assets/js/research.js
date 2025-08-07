const researchTable = document.querySelector(".main");

const certifications = [
  {
    title: "NVIDIA Fundamentals of Accelerated Computing with CUDA C/C++",
    issuer: "NVIDIA",
    date: "October 2024",
    description: "Fundamentals of GPU programming and parallel computing using CUDA.",
    link: "https://www.linkedin.com/in/rohit-patil-425867250/details/certifications/1754507623895/single-media-viewer/?profileId=ACoAAD4QN50BquVP5IGu7vxw0lTVl5LU7-YIxD8",
    image: "assets/images/research-page/nv.jpg", // Consistent path
    citebox: "popup1",
    absbox: "absPopup1",
  },
  {
    title: "NVIDIA Fundamentals of Accelerated Computing with CUDA Python",
    issuer: "NVIDIA",
    date: "October 2024",
    description:
      "Fundamentals of GPU programming and parallel computing using CUDA.",
    link: "https://www.linkedin.com/in/rohit-patil-425867250/details/certifications/1754507597134/single-media-viewer/?profileId=ACoAAD4QN50BquVP5IGu7vxw0lTVl5LU7-YIxD8",
    image: "assets/images/research-page/nv.jpg",
    citebox: "popup2",
    absbox: "absPopup2",
  },
  {
    title: "Frontend Developer Certification" ,
    issuer: "HackerRank",
    date: "July 2025",
    description:
      "Frontend Development Certification from HackerRank.",
    link: "https://www.hackerrank.com/certificates/9cac8c29dc41",
    image: "assets/images/research-page/hackerrank.png",
    citebox: "popup3",
    absbox: "absPopup3",
  },
  {
    title: "Deep Learning ",
    issuer: "NPTEL(IIT Roorkee)",
    date: "Ongoing",
    description:
      "Deep Learning course covering neural networks, CNNs, RNNs, and more.",
    link: "https://www.linkedin.com/in/rohit-patil-425867250/details/certifications/",
    image: "assets/images/research-page/nptel.png",
    citebox: "popup3",
    absbox: "absPopup3",
  },
];

AOS.init();
const fillData = () => {
  let output = "";
  certifications.forEach(
    ({ image, title, issuer, date, description, link, citebox, absbox }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="${link}" target="_blank" class="paperTitle"> ${title} </a> 
                    <div class="cert-meta">
                        <span class="cert-issuer">${issuer}</span>
                        <span class="cert-date">${date}</span>
                    </div>
                    <div class="description-text">
                        ${description}
                    </div>
                    
                    <div class="certificate-viewer" style="margin-top: 10px;">
                           <button class="button button-accent button-small" 
                                     type="button" 
                            onclick="window.open('${link}', '_blank')">
                             VIEW CERTIFICATE
                              </button>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
