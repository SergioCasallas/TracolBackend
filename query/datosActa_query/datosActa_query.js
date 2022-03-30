exports.getDatosActa=(numeroTRA, codigoVerificacion)=>{ 
console.log(numeroTRA)

return `
SELECT ip_CRM_Col.Tracol_Service_request_Details.Collection_Order, ip_CRM_Col.Tracol_Service_request_Details.Company_Name, ip_CRM_Col.Tracol_Service_request_Details.Company_Address, ip_CRM_Col.Tracol_Service_request_Details.Collection_Date, ip_CRM_Col.Tracol_Service_request_Details.UUID_ACTA FROM ip_CRM_Col.Tracol_Service_request_Details where ip_CRM_Col.Tracol_Service_request_Details.Collection_Order = '${numeroTRA}' and ip_CRM_Col.Tracol_Service_request_Details.UUID_ACTA = '${codigoVerificacion}'
    `;
};

