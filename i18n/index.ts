type Dict = Record<string, string>;
const es: Dict = {
  intro: 'Introduce referencia de ECU o selecciona archivo original:',
  ecu_placeholder: 'Referencia de ECU',
  detect_method: 'Detectar método',
  method: 'Método',
  compatible_programs: 'Programas compatibles',
  select_stage: 'Selecciona Stage',
  price: 'Precio',
  send_request: 'Enviar solicitud',
  help_text:
    'Si no estás seguro de cómo proceder, puedes enviarnos tu ECU para realizar el servicio en nuestras instalaciones.',
  legal_disclaimer:
    'Uso bajo responsabilidad del usuario. Cumple siempre la normativa de emisiones y seguridad de tu país.',
  notice: 'Aviso',
  method_required: 'Esta ECU requiere {{method}}. Se mostrará el procedimiento adecuado.',
  accept_all_phases: 'Debes aceptar las advertencias en todas las fases.',
  request_sent: 'Solicitud enviada',
  stage: 'Stage',
  extras: 'Extras',
  before: 'Antes',
  during: 'Durante',
  after: 'Después',
  stage3_warnings: 'Advertencias Stage 3',
  contact_for: 'Contacto para',
  name: 'Nombre',
  vehicle: 'Vehículo',
  notes: 'Notas',
  send: 'Enviar',
  we_contact: 'Nos pondremos en contacto contigo.',
  form_errors: 'Revisa los campos: nombre y vehículo son obligatorios.',
};
const en: Dict = {
  intro: 'Enter ECU reference or select original file:',
  ecu_placeholder: 'ECU Reference',
  detect_method: 'Detect method',
  method: 'Method',
  compatible_programs: 'Compatible programs',
  select_stage: 'Select Stage',
  price: 'Price',
  send_request: 'Send request',
  help_text: 'If unsure, you can ship your ECU and we will perform the service in-house.',
  legal_disclaimer:
    'Use at your own risk. Always comply with emissions and safety regulations in your country.',
  notice: 'Notice',
  method_required: 'This ECU requires {{method}}. The proper procedure will be shown.',
  accept_all_phases: 'You must accept warnings in all phases.',
  request_sent: 'Request sent',
  stage: 'Stage',
  extras: 'Extras',
  before: 'Before',
  during: 'During',
  after: 'After',
  stage3_warnings: 'Stage 3 warnings',
  contact_for: 'Contact for',
  name: 'Name',
  vehicle: 'Vehicle',
  notes: 'Notes',
  send: 'Send',
  we_contact: 'We will contact you.',
  form_errors: 'Check the fields: name and vehicle are required.',
};
let lang: 'es' | 'en' = 'es';
export const setLang = (l: 'es' | 'en') => {
  lang = l;
};
export const t = (key: string, vars?: Record<string, string | number>) => {
  const dict = lang === 'en' ? en : es;
  let out = dict[key] ?? key;
  if (vars) Object.keys(vars).forEach((k) => {
    out = out.replace(`{{${k}}}`, String(vars[k]));
  });
  return out;
};
