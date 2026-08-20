import os
import sys
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

pdf_filename = "/Users/ivanescudero/Desktop/proyecto2/Entrega_Proyecto_ParkShare_Ivan_Escudero.pdf"

# Adjust margins and spacing to fit perfectly on 1 page
doc = SimpleDocTemplate(
    pdf_filename,
    pagesize=letter,
    rightMargin=36,
    leftMargin=36,
    topMargin=30,
    bottomMargin=30
)

styles = getSampleStyleSheet()

title_style = ParagraphStyle(
    'DocTitle',
    parent=styles['Heading1'],
    fontName='Helvetica-Bold',
    fontSize=20,
    leading=23,
    textColor=colors.HexColor("#0f172a"),
    spaceAfter=2
)

subtitle_style = ParagraphStyle(
    'DocSubtitle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=10,
    leading=12,
    textColor=colors.HexColor("#475569"),
    spaceAfter=8
)

section_heading = ParagraphStyle(
    'SectionHeading',
    parent=styles['Heading2'],
    fontName='Helvetica-Bold',
    fontSize=12,
    leading=15,
    textColor=colors.HexColor("#0f172a"),
    spaceBefore=8,
    spaceAfter=4
)

body_style = ParagraphStyle(
    'BodyTextCustom',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=9,
    leading=12,
    textColor=colors.HexColor("#334155"),
    spaceAfter=4
)

bullet_style = ParagraphStyle(
    'BulletCustom',
    parent=body_style,
    leftIndent=10,
    spaceAfter=2
)

story = []

# Title & Subtitle Header
story.append(Paragraph("DOCUMENTO DE ENTREGA - PROYECTO ACADÉMICO", subtitle_style))
story.append(Paragraph("PARKshare AI - Plataforma P2P de Cocheras & Vehículos Eléctricos", title_style))
story.append(HRFlowable(width="100%", thickness=2.5, color=colors.HexColor("#00f5a0"), spaceBefore=3, spaceAfter=8))

# Student / Project Info Table
student_info = [
    [Paragraph("<b>Estudiante / Integrante:</b>", body_style), Paragraph("Ivan Escudero", body_style)],
    [Paragraph("<b>Cédula de Identidad:</b>", body_style), Paragraph("8-828-379", body_style)],
    [Paragraph("<b>Materia / Curso:</b>", body_style), Paragraph("Desarrollo de Aplicaciones Web Frontend / SPA", body_style)],
    [Paragraph("<b>Tecnologías Aplicadas:</b>", body_style), Paragraph("React 19, React Router v7, Context API, Tailwind CSS v4, Leaflet Maps, Google AI", body_style)],
    [Paragraph("<b>Sitio Web Publicado (GitHub Pages):</b>", body_style), Paragraph("<a href='https://ivanescud.github.io/ParkShare/'><u>https://ivanescud.github.io/ParkShare/</u></a>", body_style)],
    [Paragraph("<b>Código Fuente (GitHub Repository):</b>", body_style), Paragraph("<a href='https://github.com/ivanescud/ParkShare'><u>https://github.com/ivanescud/ParkShare</u></a>", body_style)]
]

t_info = Table(student_info, colWidths=[170, 370])
t_info.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (-1,-1), colors.HexColor("#f8fafc")),
    ('TEXTCOLOR', (0,0), (-1,-1), colors.HexColor("#0f172a")),
    ('ALIGN', (0,0), (-1,-1), 'LEFT'),
    ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ('BOTTOMPADDING', (0,0), (-1,-1), 3),
    ('TOPPADDING', (0,0), (-1,-1), 3),
    ('LEFTPADDING', (0,0), (-1,-1), 8),
    ('RIGHTPADDING', (0,0), (-1,-1), 8),
    ('BOX', (0,0), (-1,-1), 1, colors.HexColor("#cbd5e1")),
    ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor("#e2e8f0")),
]))
story.append(t_info)
story.append(Spacer(1, 6))

# Descripción de la Propuesta
story.append(Paragraph("1. Resumen de la Propuesta del Proyecto", section_heading))
desc_text = (
    "<b>PARKshare AI</b> es una plataforma web original basada en arquitectura SPA (Single Page Application) "
    "orientada a resolver el problema del estacionamiento urbano y la movilidad eléctrica mediante la economía colaborativa (Peer-to-Peer). "
    "La solución conecta a <b>conductores</b> que buscan parqueo inmediato con <b>propietarios de apartamentos y casas residenciales</b> "
    "que disponen de espacios libres sin uso (cocheras en condominios o garajes particulares en zonas como Panamá, Costa del Este, Punta Pacífica, San Francisco). "
    "Adicionalmente, integra un módulo de <b>alquiler P2P de vehículos particulares</b> (híbridos y 100% eléctricos) de dueños individuales y un "
    "<b>motor predictivo impulsado por Google AI</b> que analiza las rutas y destinos diarios del usuario."
)
story.append(Paragraph(desc_text, body_style))
story.append(Spacer(1, 10))

# Cumplimiento de Requerimientos
story.append(Paragraph("2. Cumplimiento de Requerimientos Mínimos & Criterios", section_heading))

reqs = [
    "<b>Header (Encabezado):</b> Logotipo interactivo estilo Cyber-Neon, menú de navegación SPA (Inicio, Explorar, Servicios IA, Beneficios, Contacto) con enlace directo a publicar.",
    "<b>Hero Section (Sección Principal):</b> Título de alto impacto, fondo dinámico cyber-grid, buscador dual interactivo (Parqueos / Autos) y sugerencias IA.",
    "<b>Sección de Información / Beneficios:</b> Tarjetas estructuradas con iconos visuales, desglose por perfil (Conductores vs. Propietarios) y bloque especial para Estaciones de Carga Eléctrica (EV).",
    "<b>Sección de Testimonios / Casos de Éxito:</b> Reseñas y testimonios de usuarios reales (Propietarios, Conductores EV y Rentadores) con puntuaciones y insignias de verificación.",
    "<b>Formulario de Contacto o Registro:</b> Formulario con campos obligatorios (Nombre, Email, Tipo de Solicitud y Mensaje), validación en tiempo real con mensajes de confirmación de envío.",
    "<b>Footer (Pie de Página):</b> Links de navegación, legales, datos de contacto y redes sociales.",
    "<b>Mapa Interactivo Leaflet:</b> Integración de mapa oscuro interactivo en <i>/explorar</i> marcando ubicaciones reales en Panamá con pines diferenciados por tipo (Parqueo, Carga EV ⚡, Autos).",
    "<b>Algoritmo Predictivo Google AI:</b> Módulo en <i>/servicios</i> que analiza destinos habituales del usuario (ej. Costa del Este, Punta Pacífica) para sugerir parqueos óptimos."
]

for r in reqs:
    story.append(Paragraph(f"• {r}", bullet_style))

story.append(Spacer(1, 10))

# Arquitectura Técnica
story.append(Paragraph("3. Arquitectura Técnica & Buenas Prácticas", section_heading))
tech_text = (
    "• <b>Framework:</b> React 19 con Vite para compilación ultra rápida.<br/>"
    "• <b>Enrutamiento SPA:</b> React Router v7 con `basename` configurado para despliegue sin fallas.<br/>"
    "• <b>Manejo de Estado:</b> React Context API (`AppProvider`) centralizando parqueos, autos, mapa y solicitudes.<br/>"
    "• <b>Estilos & Experiencia Visual:</b> Tailwind CSS v4 con sistema de diseño Cyber-Neon, variables HSL, efectos de luz, glassmorphism e imágenes reales.<br/>"
    "• <b>Publicación en Vivo:</b> Aplicación desplegada en GitHub Pages sin carpeta `node_modules` en el repositorio."
)
story.append(Paragraph(tech_text, body_style))
story.append(Spacer(1, 15))

# Firma y Cierre
story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor("#cbd5e1"), spaceBefore=10, spaceAfter=15))
story.append(Paragraph("<b>Presentado por:</b> Ivan Escudero &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; <b>Cédula:</b> 8-828-379 &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; <b>Fecha de Entrega:</b> Agosto 2026", body_style))

doc.build(story)
print("PDF generado exitosamente en:", pdf_filename)
