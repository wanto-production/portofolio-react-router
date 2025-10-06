


import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
  Link,
  Preview,
} from '@react-email/components';

interface ContactEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactEmail({ name, email, subject, message }: ContactEmailProps) {
  const previewText = `Pesan baru dari ${name}: ${subject}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Text style={headerText}>📧 Pesan Baru dari Portofolio</Text>
          </Section>

          <Section style={content}>
            <Heading style={heading}>Detail Pesan</Heading>

            <Text style={paragraph}>
              <strong>Nama:</strong> {name}
            </Text>

            <Text style={paragraph}>
              <strong>Email:</strong>{' '}
              <Link href={`mailto:${email}`} style={link}>
                {email}
              </Link>
            </Text>

            <Text style={paragraph}>
              <strong>Subjek:</strong> {subject}
            </Text>

            <Text style={paragraph}>
              <strong>Pesan:</strong>
            </Text>

            <Text style={messageText}>{message}</Text>
          </Section>

          <Hr style={hr} />

          <Section style={footer}>
            <Text style={footerText}>
              Dikirim otomatis dari form portofolio di website Anda.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const header = {
  padding: '20px 30px',
  backgroundColor: '#2563eb',
  borderRadius: '4px 4px 0 0',
};

const headerText = {
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0',
};

const content = {
  padding: '40px 30px',
};

const heading = {
  color: '#333',
  fontSize: '24px',
  fontWeight: 'bold',
  marginTop: '0',
  marginBottom: '30px',
  textAlign: 'center' as const,
};

const paragraph = {
  color: '#525f7f',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 16px',
};

const messageText = {
  color: '#525f7f',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 16px',
  whiteSpace: 'pre-wrap' as const,
  backgroundColor: '#f8f9fa',
  padding: '16px',
  borderRadius: '4px',
  border: '1px solid #e9ecef',
};

const link = {
  color: '#2563eb',
  textDecoration: 'underline',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '40px 0',
};

const footer = {
  padding: '0 30px',
};

const footerText = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
  margin: '0',
  textAlign: 'center' as const,
};
