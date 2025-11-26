import {
  Document,
  Font,
  Link,
  Page,
  Path,
  StyleSheet,
  Svg,
  Text,
  View,
  renderToFile,
} from '@react-pdf/renderer';
import path from 'path';
import { JSX } from 'react';
import config from '../src/config';
import { resumeData } from '../src/data/resume';

const THEME_COLOR = '#1cb386';
const TEXT_COLOR = '#333';
const ICON_COLOR = '#AAA';
const RIGHT_COL_BG = '#1cb386';
const RIGHT_COL_TEXT = '#fff';

Font.register({
  family: 'Rubik',
  fonts: [
    {
      src: 'https://cdn.jsdelivr.net/npm/@fontsource/rubik@5.0.8/files/rubik-latin-400-normal.woff',
      fontWeight: 'normal',
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/@fontsource/rubik@5.0.8/files/rubik-latin-500-normal.woff',
      fontWeight: 'bold',
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    fontFamily: 'Rubik',
    fontSize: 9,
    lineHeight: 1.2,
    color: TEXT_COLOR,
  },
  leftColumn: {
    width: '66%',
    padding: 30,
    paddingRight: 20,
  },
  rightColumn: {
    width: '34%',
    backgroundColor: RIGHT_COL_BG,
    color: RIGHT_COL_TEXT,
    padding: 20,
    paddingTop: 138,
  },
  header: {
    marginBottom: 20,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    textTransform: 'uppercase',
    color: '#333',
    marginBottom: 12,
  },
  jobTitle: {
    fontSize: 11,
    color: THEME_COLOR,
    marginBottom: 10,
    fontWeight: 'medium',
  },
  contactInfo: {
    fontSize: 9,
  },
  contactRow: {
    flexDirection: 'row',
    marginBottom: 3,
    alignItems: 'center',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 10,
    textTransform: 'uppercase',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 5,
    paddingBottom: 5,
    color: '#555',
  },
  rightSectionTitle: {
    fontSize: 10,
    textTransform: 'uppercase',
    borderBottomWidth: 1,
    borderBottomColor: RIGHT_COL_TEXT,
    marginBottom: 10,
    paddingBottom: 3,
    color: RIGHT_COL_TEXT,
  },
  job: {
    marginBottom: 10,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 5,
  },
  jobTitleText: {
    fontSize: 10,
    color: '#333',
  },
  jobDate: {
    fontSize: 8,
    color: '#333',
  },
  jobSubHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  company: {
    color: THEME_COLOR,
    fontSize: 9,
  },
  location: {
    color: '#333',
    fontSize: 8,
  },
  jobDescription: {
    fontWeight: 'bold',
    fontSize: 8,
    marginBottom: 3,
  },
  list: {
    marginLeft: 5,
  },
  listItem: {
    flexDirection: 'row',
  },
  bullet: {
    width: 3,
    height: 3,
    borderRadius: 2,
    backgroundColor: '#333',
    marginTop: 3.5,
    marginRight: 5,
  },
  listItemContent: {
    flex: 1,
    fontSize: 8,
    color: '#444',
  },
  summary: {
    fontSize: 9,
    lineHeight: 1.5,
  },
  skillGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 9,
    fontSize: 8,
    lineHeight: 1.8,
  },
  languageItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    fontSize: 9,
  },
  progressBarContainer: {
    width: 40,
    height: 4,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 2,
    marginLeft: 10,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 2,
  },
  link: {
    textDecoration: 'none',
    color: TEXT_COLOR,
  },
});

const MailIcon = () => (
  <Svg viewBox="0 0 640 640" style={{ width: 12, height: 12, marginRight: 2 }}>
    <Path
      fill={ICON_COLOR}
      d="M320 128C214 128 128 214 128 320C128 426 214 512 320 512C337.7 512 352 526.3 352 544C352 561.7 337.7 576 320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320L576 352C576 405 533 448 480 448C450.7 448 424.4 434.8 406.8 414.1C384 435.1 353.5 448 320 448C249.3 448 192 390.7 192 320C192 249.3 249.3 192 320 192C347.9 192 373.7 200.9 394.7 216.1C400.4 211.1 407.8 208 416 208C433.7 208 448 222.3 448 240L448 352C448 369.7 462.3 384 480 384C497.7 384 512 369.7 512 352L512 320C512 214 426 128 320 128zM384 320C384 284.7 355.3 256 320 256C284.7 256 256 284.7 256 320C256 355.3 284.7 384 320 384C355.3 384 384 355.3 384 320z"
    />
  </Svg>
);

const LinkIcon = () => (
  <Svg viewBox="0 0 640 640" style={{ width: 12, height: 12, marginRight: 2 }}>
    <Path
      fill={ICON_COLOR}
      d="M451.5 160C434.9 160 418.8 164.5 404.7 172.7C388.9 156.7 370.5 143.3 350.2 133.2C378.4 109.2 414.3 96 451.5 96C537.9 96 608 166 608 252.5C608 294 591.5 333.8 562.2 363.1L491.1 434.2C461.8 463.5 422 480 380.5 480C294.1 480 224 410 224 323.5C224 322 224 320.5 224.1 319C224.6 301.3 239.3 287.4 257 287.9C274.7 288.4 288.6 303.1 288.1 320.8C288.1 321.7 288.1 322.6 288.1 323.4C288.1 374.5 329.5 415.9 380.6 415.9C405.1 415.9 428.6 406.2 446 388.8L517.1 317.7C534.4 300.4 544.2 276.8 544.2 252.3C544.2 201.2 502.8 159.8 451.7 159.8zM307.2 237.3C305.3 236.5 303.4 235.4 301.7 234.2C289.1 227.7 274.7 224 259.6 224C235.1 224 211.6 233.7 194.2 251.1L123.1 322.2C105.8 339.5 96 363.1 96 387.6C96 438.7 137.4 480.1 188.5 480.1C205 480.1 221.1 475.7 235.2 467.5C251 483.5 269.4 496.9 289.8 507C261.6 530.9 225.8 544.2 188.5 544.2C102.1 544.2 32 474.2 32 387.7C32 346.2 48.5 306.4 77.8 277.1L148.9 206C178.2 176.7 218 160.2 259.5 160.2C346.1 160.2 416 230.8 416 317.1C416 318.4 416 319.7 416 321C415.6 338.7 400.9 352.6 383.2 352.2C365.5 351.8 351.6 337.1 352 319.4C352 318.6 352 317.9 352 317.1C352 283.4 334 253.8 307.2 237.5z"
    />
  </Svg>
);

const LinkedinIcon = () => (
  <Svg viewBox="0 0 640 640" style={{ width: 12, height: 12, marginRight: 2 }}>
    <Path
      fill={ICON_COLOR}
      d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z"
    />
  </Svg>
);

const LocationIcon = () => (
  <Svg viewBox="0 0 640 640" style={{ width: 12, height: 12, marginRight: 2 }}>
    <Path
      fill={ICON_COLOR}
      d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"
    />
  </Svg>
);

export default function PageTopPadding({
  padding = 20,
}: {
  padding?: number;
}): JSX.Element {
  return (
    <View
      fixed
      render={({ pageNumber }) => {
        if (pageNumber === 1) {
          return null;
        } else {
          return (
            <View
              style={{
                height: padding,
                width: '100%',
              }}
            />
          );
        }
      }}
    />
  );
}

export const Resume = () => {
  const { firstName, lastName, email, address, socialLinks } = config;
  const {
    jobTitle,
    description,
    experience,
    education,
    skillGroups,
    languages,
  } = resumeData;

  const website = 'https://jheroje.github.io/resume';

  const linkedin = socialLinks.find((l) => l.name === 'Linkedin')?.url;

  return (
    <Document>
      <Page style={styles.page}>
        {/* Left Column */}
        <View style={styles.leftColumn}>
          <PageTopPadding padding={30} />
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.name}>
              {firstName} {lastName}
            </Text>
            <Text style={styles.jobTitle}>{jobTitle}</Text>

            <View style={styles.contactInfo}>
              <View style={styles.contactRow}>
                <View style={styles.contactItem}>
                  <MailIcon />
                  <Link src={`mailto:${email}`} style={styles.link}>
                    {email}
                  </Link>
                </View>
                <View style={styles.contactItem}>
                  <LinkIcon />
                  <Link src={website} style={styles.link}>
                    {website}
                  </Link>
                </View>
              </View>

              {linkedin && (
                <View style={styles.contactRow}>
                  <View style={styles.contactItem}>
                    <LinkedinIcon />
                    <Link src={linkedin} style={styles.link}>
                      {linkedin}
                    </Link>
                  </View>
                </View>
              )}

              <View style={styles.contactRow}>
                <View style={styles.contactItem}>
                  <LocationIcon />
                  <Text>{address}</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Experience */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>
            {experience.map((job, index) => (
              <View key={index} style={styles.job} wrap={false}>
                <View style={styles.jobHeader}>
                  <Text style={styles.jobTitleText}>{job.title}</Text>
                  <Text style={styles.jobDate}>{job.period}</Text>
                </View>
                <View style={styles.jobSubHeader}>
                  <Text style={styles.company}>{job.company}</Text>
                  <Text style={styles.location}>{job.location}</Text>
                </View>

                {job.description && (
                  <Text style={styles.jobDescription}>{job.description}</Text>
                )}

                <View style={styles.list}>
                  {job.details &&
                    job.details.map((detail, i) => (
                      <View key={`detail-${i}`} style={styles.listItem}>
                        <View style={styles.bullet} />
                        <Text
                          style={styles.listItemContent}
                          hyphenationCallback={(word) => [word]}
                        >
                          {detail}
                        </Text>
                      </View>
                    ))}

                  {job.projects && job.projects.length > 0 && (
                    <View style={styles.listItem}>
                      <View style={styles.bullet} />
                      <Text
                        style={styles.listItemContent}
                        hyphenationCallback={(word) => [word]}
                      >
                        Projects: {job.projects.join(', ')}
                      </Text>
                    </View>
                  )}

                  {job.competences.map((comp, i) => (
                    <View key={`comp-${i}`} style={styles.listItem}>
                      <View style={styles.bullet} />
                      <Text
                        style={styles.listItemContent}
                        hyphenationCallback={(word) => [word]}
                      >
                        {comp}
                      </Text>
                    </View>
                  ))}

                  {job.techStack.length > 0 && (
                    <View style={styles.listItem}>
                      <View style={styles.bullet} />
                      <Text
                        style={styles.listItemContent}
                        hyphenationCallback={(word) => [word]}
                      >
                        Tech stack: {job.techStack.join(', ')}
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            ))}
          </View>

          {/* Education */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {education.map((edu, index) => (
              <View key={index} style={styles.job} wrap={false}>
                <View style={styles.jobHeader}>
                  <Text style={styles.jobTitleText}>{edu.title}</Text>
                  <Text style={styles.jobDate}>{edu.period}</Text>
                </View>
                <View style={styles.jobSubHeader}>
                  <Text style={styles.company}>{edu.school}</Text>
                </View>
                <View style={styles.list}>
                  {edu.details.map((detail, i) => (
                    <View key={i} style={styles.listItem}>
                      <View style={styles.bullet} />
                      <Text style={styles.listItemContent}>{detail}</Text>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>
        {/* Right Column */}
        <View style={styles.rightColumn}>
          {/* Summary */}
          <View style={styles.section}>
            <Text style={styles.rightSectionTitle}>Summary</Text>
            <Text style={styles.summary} hyphenationCallback={(word) => [word]}>
              {description}
            </Text>
          </View>

          {/* Skills */}
          <View style={styles.section}>
            <Text style={styles.rightSectionTitle}>Skills</Text>
            {skillGroups &&
              skillGroups.map((group, index) => (
                <View key={index} style={styles.skillGroup}>
                  {group.skills.map((skill, skillIndex) => (
                    <Text key={skillIndex}>
                      {skill}
                      {skillIndex < group.skills.length - 1 ? ' • ' : ''}
                    </Text>
                  ))}
                </View>
              ))}
          </View>

          {/* Languages */}
          <View style={styles.section}>
            <Text style={styles.rightSectionTitle}>Languages</Text>
            {languages &&
              languages.map((lang, index) => (
                <View key={index} style={styles.languageItem}>
                  <Text style={{ width: 50 }}>{lang.name}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text>{lang.level}</Text>
                    <View style={styles.progressBarContainer}>
                      <View
                        style={[
                          styles.progressBar,
                          { width: lang.level === 'Native' ? '100%' : '80%' },
                        ]}
                      />
                    </View>
                  </View>
                </View>
              ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};

const outputPath = path.resolve(process.cwd(), 'public/resume.pdf');

console.log(`Generating PDF to ${outputPath}...`);

renderToFile(<Resume />, outputPath)
  .then(() => {
    console.log('PDF generated successfully!');
  })
  .catch((error) => {
    console.error('Error generating PDF:', error);
    process.exit(1);
  });
