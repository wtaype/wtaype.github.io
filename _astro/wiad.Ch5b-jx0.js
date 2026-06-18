if(typeof document<"u"&&!document.getElementById("wiad_styles")){const i=document.createElement("style");i.id="wiad_styles",i.textContent=`
.po_ad_sticky {
  position: sticky;
  top: 7vh;
  overflow: hidden;
}
.po_ad_sticky .lc_ad_side { margin: 0; }
.po_ad_sticky .wi_ad_link {
  display: block;
  border-radius: 1.8vh !important;
  overflow: hidden;
  margin: auto;
}
.po_ad_sticky .wi_ad_img {
  transition: transform .5s ease;
}
.po_ad_sticky .wi_ad_link:hover .wi_ad_img { transform: scale(1.04); }
    .wi_ad_link { padding:0!important; border:none!important; background:transparent!important; overflow:hidden; display:block; width:100%; max-width:300px; height:600px; opacity:0.9!important; transition:all 0.3s ease; }
    .wi_ad_link:hover { opacity:1!important; transform:scale(1.02); }
    .wi_ad_img { width:100%; height:100%; object-fit:cover; border-radius:1vh; display:block; }
  `,document.head.appendChild(i)}const t=`
  <div class="lc_ad_side lc_ad_l">
    <a href="https://lovewi.web.app/" target="_blank" class="lc_ad_box wi_ad_link">
      <img src="https://typingwii.web.app/Img0.webp" alt="Ad Left" class="wi_ad_img" />
    </a>
  </div>
`;export{t as adLeft};
