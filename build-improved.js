#!/usr/bin/env node

/**
 * MJML Build Script with Variable Processing
 * 1. Compiles MJML → HTML
 * 2. Post-processes Handlebars variables
 * 3. Generates preview versions with sample data
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// __dirname is available in CommonJS

// Load configuration
const configPath = path.join(__dirname, 'src/data/entities/huila.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

// Plantilla → Stepper State mapping
const PLANTILLA_STEPPER_MAP = {
  '01-datos-registrados': 'after_registration',
  '02-primer-pago-aprobado': 'after_first_payment',
  '03-primer-pago-rechazado': 'payment_failed',
  '04-cita-agendada-exitosa': 'appointment_scheduled',
  '05-cita-reprogramada': 'appointment_scheduled',
  '06-cita-cancelada': 'payment_failed',
  '07-recordatorio-agendamiento': 'appointment_scheduled',
  '08-solicitud-segundo-pago': 'appointment_scheduled',
  '09-segundo-pago-aprobado': 'after_first_payment',
  '10-pasaporte-listo-recoger': 'after_first_payment',
  '11-recordatorio-cita-proxima': 'appointment_scheduled',
  '12-cita-requisitos-extendidos': 'appointment_scheduled',
  '13-cita-requisitos-adjunto': 'appointment_scheduled'
};

// Alert state mapping: plantilla → color/icon
const PLANTILLA_ALERT_MAP = {
  '01-datos-registrados': { bg: '#CFF7D3', text: '#02542D', icon: '✓' },
  '02-primer-pago-aprobado': { bg: '#CFF7D3', text: '#02542D', icon: '✓' },
  '03-primer-pago-rechazado': { bg: '#FEE2E2', text: '#991B1B', icon: '✕' },
  '04-cita-agendada-exitosa': { bg: '#FEF3C7', text: '#92400E', icon: 'ℹ' },
  '05-cita-reprogramada': { bg: '#EDE9FE', text: '#6B21A8', icon: '↻' },
  '06-cita-cancelada': { bg: '#FEE2E2', text: '#991B1B', icon: '✕' },
  '07-recordatorio-agendamiento': { bg: '#FEF3C7', text: '#92400E', icon: 'ℹ' },
  '08-solicitud-segundo-pago': { bg: '#DBEAFE', text: '#0C4A6E', icon: 'ℹ' },
  '09-segundo-pago-aprobado': { bg: '#CFF7D3', text: '#02542D', icon: '✓' },
  '10-pasaporte-listo-recoger': { bg: '#CFF7D3', text: '#02542D', icon: '✓' },
  '11-recordatorio-cita-proxima': { bg: '#FEF3C7', text: '#92400E', icon: 'ℹ' },
  '12-cita-requisitos-extendidos': { bg: '#DBEAFE', text: '#0C4A6E', icon: 'ℹ' },
  '13-cita-requisitos-adjunto': { bg: '#FEF3C7', text: '#92400E', icon: 'ℹ' }
};

/**
 * Replace all Handlebars variables in HTML
 */
function replaceVariables(html, plantillaName) {
  let result = html;

  // Get stepper state
  const stepperState = config.stepper_states[PLANTILLA_STEPPER_MAP[plantillaName]];
  const alertState = PLANTILLA_ALERT_MAP[plantillaName] || { bg: '#CFF7D3', text: '#02542D', icon: '✓' };

  // Build replacement map
  const replacements = {
    // Entity metadata
    '{{ENTITY_NAME}}': config.entity_metadata.entity_name,
    '{{ENTITY_SECRETARIAT_TITLE}}': config.entity_metadata.entity_secretariat_title,
    '{{ENTITY_LOGO_URL}}': config.entity_metadata.entity_logo_url,
    '{{ENTITY_SUPPORT_EMAIL}}': config.entity_metadata.entity_support_email,
    '{{ENTITY_COPYRIGHT}}': config.entity_metadata.entity_copyright,

    // Page content
    '{{PAGE_TITLE}}': getPageTitle(plantillaName),

    // Stepper
    '{{STEP1_BG}}': stepperState.STEP1_BG,
    '{{STEP1_TEXT}}': stepperState.STEP1_TEXT,
    '{{STEP1_ICON}}': stepperState.STEP1_ICON,
    '{{STEP1_LABEL}}': config.messages.step_1_label,
    '{{STEP2_BG}}': stepperState.STEP2_BG,
    '{{STEP2_TEXT}}': stepperState.STEP2_TEXT,
    '{{STEP2_ICON}}': stepperState.STEP2_ICON,
    '{{STEP2_LABEL}}': config.messages.step_2_label,
    '{{STEP3_BG}}': stepperState.STEP3_BG,
    '{{STEP3_TEXT}}': stepperState.STEP3_TEXT,
    '{{STEP3_ICON}}': stepperState.STEP3_ICON,
    '{{STEP3_LABEL}}': config.messages.step_3_label,
    '{{STEP4_BG}}': stepperState.STEP4_BG,
    '{{STEP4_TEXT}}': stepperState.STEP4_TEXT,
    '{{STEP4_ICON}}': stepperState.STEP4_ICON,
    '{{STEP4_LABEL}}': config.messages.step_4_label,

    // Lines
    '{{LINE1_START}}': stepperState.LINE1_START,
    '{{LINE1_END}}': stepperState.LINE1_END,
    '{{LINE2_START}}': stepperState.LINE2_START,
    '{{LINE2_END}}': stepperState.LINE2_END,
    '{{LINE3_START}}': stepperState.LINE3_START,
    '{{LINE3_END}}': stepperState.LINE3_END,

    // Alert
    '{{ALERT_BG}}': alertState.bg,
    '{{ALERT_TEXT_COLOR}}': alertState.text,
    '{{ALERT_ICON}}': alertState.icon,
    '{{ALERT_TITLE}}': getAlertTitle(plantillaName),
    '{{ALERT_TEXT}}': getAlertText(plantillaName),

    // Data list (ejemplo)
    '{{DATA_LIST_TITLE}}': 'Datos Registrados',
    '{{DATA_LABEL_1}}': 'Nombre Completo',
    '{{DATA_VALUE_1}}': 'Fabian Alejandro López García',
    '{{DATA_LABEL_2}}': 'Número de Cédula',
    '{{DATA_VALUE_2}}': '1.234.567.890',
    '{{DATA_LABEL_3}}': 'Correo Electrónico',
    '{{DATA_VALUE_3}}': 'fabian.lopez@example.com',
    '{{DATA_LABEL_4}}': 'Teléfono de Contacto',
    '{{DATA_VALUE_4}}': '+57 (316) 5234567',
    '{{DATA_LABEL_5}}': 'Número de Pasaporte',
    '{{DATA_VALUE_5}}': 'E 12345678',
    '{{DATA_LABEL_6}}': 'Nacionalidad',
    '{{DATA_VALUE_6}}': 'Colombiana',

    // Tariffs
    '{{TARIFF_ORDINARIO_LABEL}}': config.tariffs.first_payment.ordinario.label,
    '{{TARIFF_ORDINARIO_DAYS}}': config.tariffs.first_payment.ordinario.days,
    '{{TARIFF_ORDINARIO_PRICE}}': config.tariffs.first_payment.ordinario.price,
    '{{TARIFF_EJECUTIVO_LABEL}}': config.tariffs.first_payment.ejecutivo.label,
    '{{TARIFF_EJECUTIVO_DAYS}}': config.tariffs.first_payment.ejecutivo.days,
    '{{TARIFF_EJECUTIVO_PRICE}}': config.tariffs.first_payment.ejecutivo.price,
    '{{TARIFF_EMERGENCIA_LABEL}}': config.tariffs.first_payment.emergencia.label,
    '{{TARIFF_EMERGENCIA_DAYS}}': config.tariffs.first_payment.emergencia.days,
    '{{TARIFF_EMERGENCIA_PRICE}}': config.tariffs.first_payment.emergencia.price,

    // Button
    '{{BUTTON_PRIMARY_TEXT}}': config.messages.button_continue_payment,
    '{{BUTTON_PRIMARY_URL}}': 'https://payment.example.com/checkout',

    // Footer
    '{{FOOTER_GREETING}}': config.email_copy.footer_greeting,

    // Office hours
    '{{OFFICE_HOURS_WEEKDAY}}': config.entity_metadata.office_hours_weekday,
    '{{OFFICE_HOURS_WEEKEND}}': config.entity_metadata.office_hours_weekend,
  };

  // Replace all variables
  Object.entries(replacements).forEach(([variable, value]) => {
    result = result.split(variable).join(value || variable);
  });

  return result;
}

/**
 * Get page title based on plantilla name
 */
function getPageTitle(plantillaName) {
  const titles = {
    '01-datos-registrados': 'Completa tu registro de datos',
    '02-primer-pago-aprobado': 'Tu primer pago fue aprobado',
    '03-primer-pago-rechazado': 'Tu primer pago fue rechazado',
    '04-cita-agendada-exitosa': 'Tu cita fue agendada exitosamente',
    '05-cita-reprogramada': 'Tu cita fue reprogramada',
    '06-cita-cancelada': 'Tu cita fue cancelada',
    '07-recordatorio-agendamiento': 'Recordatorio de agendamiento',
    '08-solicitud-segundo-pago': 'Debes realizar el segundo pago',
    '09-segundo-pago-aprobado': 'Tu segundo pago fue aprobado',
    '10-pasaporte-listo-recoger': 'Tu pasaporte está listo para recoger',
    '11-recordatorio-cita-proxima': 'Tu cita está próxima',
    '12-cita-requisitos-extendidos': 'Requisitos adicionales para tu trámite',
    '13-cita-requisitos-adjunto': 'Lista de requisitos'
  };
  return titles[plantillaName] || 'Proceso de solicitud de pasaporte';
}

/**
 * Get alert title based on plantilla name
 */
function getAlertTitle(plantillaName) {
  const titles = {
    '01-datos-registrados': '✓ Datos registrados',
    '02-primer-pago-aprobado': '✓ Pago aprobado',
    '03-primer-pago-rechazado': '✕ Pago rechazado',
    '04-cita-agendada-exitosa': 'ℹ Cita confirmada',
    '05-cita-reprogramada': '↻ Cita reprogramada',
    '06-cita-cancelada': '✕ Cita cancelada',
    '07-recordatorio-agendamiento': 'ℹ Recordatorio',
    '08-solicitud-segundo-pago': 'ℹ Segundo pago',
    '09-segundo-pago-aprobado': '✓ Segundo pago aprobado',
    '10-pasaporte-listo-recoger': '✓ Pasaporte listo',
    '11-recordatorio-cita-proxima': 'ℹ Recordatorio',
    '12-cita-requisitos-extendidos': 'ℹ Requisitos extendidos',
    '13-cita-requisitos-adjunto': 'ℹ Requisitos del trámite'
  };
  return titles[plantillaName] || 'Información importante';
}

/**
 * Get alert text based on plantilla name
 */
function getAlertText(plantillaName) {
  const texts = {
    '01-datos-registrados': 'Tus datos fueron registrados exitosamente. Puedes continuar al siguiente paso del proceso.',
    '02-primer-pago-aprobado': 'Tu primer pago fue procesado correctamente. Procede a agendar tu cita.',
    '03-primer-pago-rechazado': 'Tu primer pago no pudo ser procesado. Por favor, intenta nuevamente con otro método de pago.',
    '04-cita-agendada-exitosa': 'Tu cita fue confirmada. Recibirás un recordatorio 24 horas antes.',
    '05-cita-reprogramada': 'Tu cita fue reprogramada exitosamente a la nueva fecha y hora.',
    '06-cita-cancelada': 'Tu cita fue cancelada. Puedes agendar una nueva en cualquier momento.',
    '07-recordatorio-agendamiento': 'No olvides agendar tu cita. Tienes hasta 30 días desde tu pago.',
    '08-solicitud-segundo-pago': 'Realiza tu segundo pago para completar el proceso de solicitud.',
    '09-segundo-pago-aprobado': 'Tu segundo pago fue aprobado. Tu pasaporte estará listo en la fecha programada.',
    '10-pasaporte-listo-recoger': 'Tu pasaporte está listo para ser recogido. Dirígete a la oficina con tu cédula.',
    '11-recordatorio-cita-proxima': 'Tu cita está programada para el próximo {{APPOINTMENT_DATE}}. Confirma tu asistencia.',
    '12-cita-requisitos-extendidos': 'Se requieren documentos adicionales para tu trámite. Revisa la lista adjunta.',
    '13-cita-requisitos-adjunto': 'Descarga los requisitos necesarios y llévalos el día de tu cita.'
  };
  return texts[plantillaName] || 'Por favor, revisa la información siguiente.';
}

/**
 * Main build process
 */
async function build() {
  try {
    // Ensure dist directory exists
    const distDir = path.join(__dirname, 'dist');
    if (!fs.existsSync(distDir)) {
      fs.mkdirSync(distDir, { recursive: true });
      console.log('✓ Created dist/ directory');
    }

    // Find all MJML files
    const templatesDir = path.join(__dirname, 'src', 'templates');
    const files = fs.readdirSync(templatesDir)
      .filter(file => file.endsWith('.mjml'))
      .sort();

    console.log(`\n📧 Compiling and processing ${files.length} MJML templates...\n`);

    let successCount = 0;
    let errorCount = 0;

    for (const file of files) {
      try {
        const inputPath = path.join(templatesDir, file);
        const plantillaName = file.replace('.mjml', '');
        const outputFile = plantillaName + '.html';
        const outputPath = path.join(distDir, outputFile);

        // Step 1: Compile MJML to HTML
        execSync(`npx mjml "${inputPath}" -o "${outputPath}"`, {
          stdio: 'pipe',
          cwd: __dirname
        });

        // Step 2: Post-process variables
        let htmlContent = fs.readFileSync(outputPath, 'utf-8');
        htmlContent = replaceVariables(htmlContent, plantillaName);
        fs.writeFileSync(outputPath, htmlContent, 'utf-8');

        console.log(`  ✓ ${file} → ${outputFile} (variables processed)`);
        successCount++;
      } catch (error) {
        console.error(`  ✗ ${file} - ${error.message}`);
        errorCount++;
      }
    }

    console.log(`\n📊 Build Summary:`);
    console.log(`  ✓ Success: ${successCount}/${files.length}`);
    if (errorCount > 0) {
      console.log(`  ✗ Failed: ${errorCount}/${files.length}`);
    }

    console.log(`\n✅ All templates compiled and processed!`);
    console.log(`📁 Output: ${distDir}\n`);

    if (errorCount > 0) {
      process.exit(1);
    }

  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
}

build();
