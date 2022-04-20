exports.getDatosActa = (numeroTRA, codigoVerificacion) => {
  return `
SELECT ip_CRM_Col.Tracol_Service_request_Details.Residue, ip_CRM_Col.Tracol_Service_request_Details.Weight, ip_CRM_Col.Tracol_Service_request_Details.Quantity , ip_CRM_Col.Tracol_Service_request_Details.Residue_Type , ip_CRM_Col.Tracol_Service_request_Details.Tipo_pretratamiento, ip_CRM_Col.Tracol_Service_request_Details.Gestor, ip_CRM_Col.Tracol_Service_request_Details.Package, ip_CRM_Col.Tracol_Service_request_Details.Collection_Order, ip_CRM_Col.Tracol_Service_request_Details.Company_Name, ip_CRM_Col.Tracol_Service_request_Details.Company_Address, ip_CRM_Col.Tracol_Service_request_Details.Collection_Date, ip_CRM_Col.Tracol_Service_request_Details.UUID_ACTA FROM ip_CRM_Col.Tracol_Service_request_Details where ip_CRM_Col.Tracol_Service_request_Details.Collection_Order = '${numeroTRA}' and ip_CRM_Col.Tracol_Service_request_Details.UUID_ACTA = '${codigoVerificacion}'
    `;
};

// numerotra
// gestor
// fecha

// datos especificos

// cliente
// sede
// residuo
// peso
// embalaje
// tipo de residuo
// prepratratamiento
