window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyAAXRy7Uoi9UlR_Jt3YwLXwzLc8CHbmmEg",
  authDomain: "familyrest-10866.firebaseapp.com",
  projectId: "familyrest-10866",
  storageBucket: "familyrest-10866.firebasestorage.app",
  messagingSenderId: "565989325716",
  appId: "1:565989325716:web:4b0df8e0a0850eb5b1ad81",
  measurementId: "G-LGCETXQ2RJ"
};

window.FIREBASE_DOCUMENT = "family-restaurant";

// كل فرع موقع مستقل: له دوكمنت خاص بالقاعدة + فرع واحد فقط (ما يختلط مع غيره)
window.FIREBASE_SITES = {
  amiriya: {
    doc: "family-amiriya",
    branch: {
      id: "amiriya", name: "العامرية", phone: "07750556655", whatsapp: "07750556655", order: 0,
      address: "بغداد - العامرية - شارع العمل الشعبي - قرب مول العامرية"
    }
  },
  tayyara: {
    doc: "family-tayyara",
    branch: {
      id: "abo_tayara", name: "أبو طيارة", phone: "07705257610", whatsapp: "07705257610", order: 0,
      address: "الدورة / شارع أبو طيارة / مقابل مطعم تمام",
      mapUrl: "https://maps.app.goo.gl/anGenh2ESA3tWMVA7"
    }
  },
  seha: {
    doc: "family-seha",
    branch: {
      id: "sehha", name: "الصحة", phone: "07747776677", whatsapp: "07747776677", order: 0,
      address: "الدورة / شارع الصحة / مجاور الشيف السوري",
      mapUrl: "https://maps.app.goo.gl/Av8bPNNK6k9HWfdTA"
    }
  }
};
