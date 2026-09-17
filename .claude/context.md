# Email Design System: Passport Mailing Module

## Architecture
**Zero Hardcoded Copy Pattern**: All text, pricing, entity-specific data is parametrized via Handlebars variables ({{VARIABLE}}) and sourced from JSON data files per entity.

## Design Constraints
- **MJML Only**: No modern CSS (flexbox, grid). MSO Outlook compatibility is mandatory.
- **Canvas Width**: 640px (mj-body container)
- **Typography**: Plus Jakarta Sans (Google Fonts import) with Arial/Helvetica fallback for Outlook
- **Icons**: PNG rasterized (no SVG embeds, no icon fonts)
- **QR Codes**: Dynamic injection via {{QR_CODE_IMAGE_URL}}
- **CSAT/Surveys**: Single-click links with parametrized URIs

## Component Library Structure
- **Atomic Components**: `/src/components/` (15 reusable blocks)
- **Templates**: `/src/templates/` (13 transactional emails)
- **Entity Data**: `/src/data/entities/[entity].json` (mock Huila data)

## Build Process
```bash
npm run build     # Compile MJML → HTML in dist/
npm run watch     # Watch mode for dev
```

## Figma Integration
Designs sourced from: https://www.figma.com/design/4RAS6of2sw4xBlx9WS8y6p/Mailing---Pasasportes
Each template node references specific node IDs for precise text extraction and layout validation.
