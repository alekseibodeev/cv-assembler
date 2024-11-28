import { PlusSquare, Trash2 } from 'lucide-react';

import Accordion from '@/components/accordion';
import Button from '@/components/button';
import Fieldset from '@/components/fieldset';
import FormField from '@/components/form-field';
import FormSection from '@/components/form-section';
import InputGroup from '@/components/input-group';
import Label from '@/components/label';
import TextArea from '@/components/text-area';
import TextInput from '@/components/text-input';
import VisuallyHidden from '@/components/visually-hidden';

import useCV from '@/hooks/use-cv';

// TODO: ? Split form to multiple semantic blocks ?

const CVForm = () => {
  const { data, updateData } = useCV();

  // TODO: Write event handlers abstractions

  return (
    <form>
      <Accordion>
        <Accordion.Item value="1">
          <Accordion.Header>Contact Information</Accordion.Header>
          <Accordion.Panel>
            <FormSection>
              <FormField>
                <Label htmlFor="name">Full name</Label>
                <TextInput
                  id="name"
                  value={data.name}
                  onChange={(e) => updateData({ name: e.target.value })}
                />
              </FormField>
              <FormField>
                <Label htmlFor="phone">Phone number</Label>
                <TextInput
                  id="phone"
                  type="tel"
                  value={data.phone}
                  onChange={(e) => updateData({ phone: e.target.value })}
                />
              </FormField>
              <FormField>
                <Label htmlFor="city">City</Label>
                <TextInput
                  id="city"
                  value={data.city}
                  onChange={(e) => updateData({ city: e.target.value })}
                />
              </FormField>
              <FormField>
                <Label htmlFor="state">State</Label>
                <TextInput
                  id="state"
                  value={data.state}
                  onChange={(e) => updateData({ state: e.target.value })}
                />
              </FormField>
              <FormField>
                <Label htmlFor="zip">Zip</Label>
                <TextInput
                  id="zip"
                  value={data.zip}
                  onChange={(e) => updateData({ zip: e.target.value })}
                />
              </FormField>
              <FormField>
                <Label htmlFor="email">Email</Label>
                <TextInput
                  id="email"
                  type="email"
                  value={data.email}
                  onChange={(e) => updateData({ email: e.target.value })}
                />
              </FormField>
              <Fieldset>
                <Fieldset.Legend>Links</Fieldset.Legend>
                {data.links.map((link, index) => (
                  <FormField key={link.id}>
                    <InputGroup>
                      <TextInput
                        aria-label="Link"
                        value={link.url}
                        onChange={(e) =>
                          updateData({
                            links: data.links.map((el, i) =>
                              i === index ? { ...el, url: e.target.value } : el,
                            ),
                          })
                        }
                      />
                      <Button
                        type="button"
                        onClick={() =>
                          updateData({
                            links: data.links.filter((_, i) => i !== index),
                          })
                        }
                      >
                        <VisuallyHidden>Delete</VisuallyHidden>
                        <Trash2 />
                      </Button>
                    </InputGroup>
                  </FormField>
                ))}
                <Button
                  type="button"
                  onClick={() =>
                    updateData({
                      links: data.links.concat({
                        id: window.crypto.randomUUID(),
                        url: '',
                      }),
                    })
                  }
                >
                  Add <PlusSquare />
                </Button>
              </Fieldset>
            </FormSection>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="2">
          <Accordion.Header>Professional summary</Accordion.Header>
          <Accordion.Panel>
            <FormSection>
              <FormField>
                <Label htmlFor="headline">Headline</Label>
                <TextInput
                  id="headline"
                  value={data.headline}
                  onChange={(e) => updateData({ headline: e.target.value })}
                />
              </FormField>
              <FormField>
                <Label htmlFor="professional-summary">Summary</Label>
                <TextArea
                  id="professional-summary"
                  value={data.professionalSummary}
                  onChange={(e) =>
                    updateData({ professionalSummary: e.target.value })
                  }
                />
              </FormField>
            </FormSection>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="3">
          <Accordion.Header>Skills</Accordion.Header>
          <Accordion.Panel>
            <FormSection>
              {data.skills.map((skill, index) => (
                <Fieldset key={skill.id}>
                  <Fieldset.Legend>Skillset {index + 1}</Fieldset.Legend>
                  <FormField>
                    <Label htmlFor={`skill-summary-${index}`}>Summary</Label>
                    <TextInput
                      id={`skill-summary-${index}`}
                      value={skill.summary}
                      onChange={(e) =>
                        updateData({
                          skills: data.skills.map((el, i) =>
                            i === index
                              ? { ...el, summary: e.target.value }
                              : el,
                          ),
                        })
                      }
                    />
                  </FormField>
                  <FormField>
                    <Label htmlFor={`los-${index}`}>List of skills</Label>
                    <TextArea
                      id={`los-${index}`}
                      value={skill.list}
                      onChange={(e) =>
                        updateData({
                          skills: data.skills.map((el, i) =>
                            i === index ? { ...el, list: e.target.value } : el,
                          ),
                        })
                      }
                    />
                  </FormField>
                  <Button
                    type="button"
                    onClick={() =>
                      updateData({
                        skills: data.skills.filter((_, i) => i !== index),
                      })
                    }
                  >
                    Delete <Trash2 />
                  </Button>
                </Fieldset>
              ))}
              <Button
                type="button"
                onClick={() =>
                  updateData({
                    skills: data.skills.concat({
                      id: window.crypto.randomUUID(),
                      summary: '',
                      list: '',
                    }),
                  })
                }
              >
                Add <PlusSquare />
              </Button>
            </FormSection>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="4">
          <Accordion.Header>Experience</Accordion.Header>
          <Accordion.Panel>
            <FormSection>
              {data.experience.map((job, index) => (
                <Fieldset key={job.id}>
                  <Fieldset.Legend>Job {index + 1}</Fieldset.Legend>
                  <FormField>
                    <Label htmlFor={`job-company-${index}`}>Company</Label>
                    <TextInput
                      id={`job-company-${index}`}
                      value={job.company}
                      onChange={(e) =>
                        updateData({
                          experience: data.experience.map((el, i) =>
                            i === index
                              ? { ...el, company: e.target.value }
                              : el,
                          ),
                        })
                      }
                    />
                  </FormField>
                  <FormField>
                    <Label htmlFor={`job-location-${index}`}>Location</Label>
                    <TextInput
                      id={`job-location-${index}`}
                      value={job.location}
                      onChange={(e) =>
                        updateData({
                          experience: data.experience.map((el, i) =>
                            i === index
                              ? { ...el, location: e.target.value }
                              : el,
                          ),
                        })
                      }
                    />
                  </FormField>
                  <FormField>
                    <Label htmlFor={`job-position-${index}`}>Position</Label>
                    <TextInput
                      id={`job-position-${index}`}
                      value={job.title}
                      onChange={(e) =>
                        updateData({
                          experience: data.experience.map((el, i) =>
                            i === index ? { ...el, title: e.target.value } : el,
                          ),
                        })
                      }
                    />
                  </FormField>
                  <FormField>
                    <Label htmlFor={`job-start-${index}`}>Start date</Label>
                    <TextInput
                      id={`job-start-${index}`}
                      type="month"
                      value={job.startDate}
                      onChange={(e) =>
                        updateData({
                          experience: data.experience.map((el, i) =>
                            i === index
                              ? { ...el, startDate: e.target.value }
                              : el,
                          ),
                        })
                      }
                    />
                  </FormField>
                  <FormField>
                    <Label htmlFor={`job-end-${index}`}>End date</Label>
                    <TextInput
                      id={`job-end-${index}`}
                      type="month"
                      value={job.endDate}
                      onChange={(e) =>
                        updateData({
                          experience: data.experience.map((el, i) =>
                            i === index
                              ? { ...el, endDate: e.target.value }
                              : el,
                          ),
                        })
                      }
                    />
                  </FormField>
                  <FormField>
                    <Label htmlFor={`job-accomplishments-${index}`}>
                      Accomplishments
                    </Label>
                    <TextArea
                      id={`job-accomplishments-${index}`}
                      value={job.accomplishments}
                      onChange={(e) =>
                        updateData({
                          experience: data.experience.map((el, i) =>
                            i === index
                              ? { ...el, accomplishments: e.target.value }
                              : el,
                          ),
                        })
                      }
                    />
                  </FormField>
                  <Button
                    type="button"
                    onClick={() =>
                      updateData({
                        experience: data.experience.filter(
                          (_, i) => i !== index,
                        ),
                      })
                    }
                  >
                    Delete <Trash2 />
                  </Button>
                </Fieldset>
              ))}
              <Button
                type="button"
                onClick={() =>
                  updateData({
                    experience: data.experience.concat({
                      id: window.crypto.randomUUID(),
                      company: '',
                      location: '',
                      title: '',
                      startDate: '',
                      endDate: '',
                      accomplishments: '',
                    }),
                  })
                }
              >
                Add <PlusSquare />
              </Button>
            </FormSection>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="5">
          <Accordion.Header>Education</Accordion.Header>
          <Accordion.Panel>
            <FormSection>
              {data.education.map((university, index) => (
                <Fieldset key={university.id}>
                  <Fieldset.Legend>University {index + 1}</Fieldset.Legend>
                  <FormField>
                    <Label htmlFor={`university-degree-${index}`}>
                      Degree name
                    </Label>
                    <TextInput
                      id={`university-degree-${index}`}
                      value={university.degree}
                      onChange={(e) =>
                        updateData({
                          education: data.education.map((el, i) =>
                            i === index
                              ? { ...el, degree: e.target.value }
                              : el,
                          ),
                        })
                      }
                    />
                  </FormField>
                  <FormField>
                    <Label htmlFor={`university-year-${index}`}>
                      Year of graduation
                    </Label>
                    <TextInput
                      id={`university-year-${index}`}
                      inputMode="numeric"
                      value={university.year}
                      onChange={(e) =>
                        updateData({
                          education: data.education.map((el, i) =>
                            i === index ? { ...el, year: e.target.value } : el,
                          ),
                        })
                      }
                    />
                  </FormField>
                  <FormField>
                    <Label htmlFor={`university-name-${index}`}>
                      University name
                    </Label>
                    <TextInput
                      id={`university-name-${index}`}
                      value={university.name}
                      onChange={(e) =>
                        updateData({
                          education: data.education.map((el, i) =>
                            i === index ? { ...el, name: e.target.value } : el,
                          ),
                        })
                      }
                    />
                  </FormField>
                  <FormField>
                    <Label htmlFor={`university-location-${index}`}>
                      University location
                    </Label>
                    <TextInput
                      id={`university-location-${index}`}
                      value={university.location}
                      onChange={(e) =>
                        updateData({
                          education: data.education.map((el, i) =>
                            i === index
                              ? { ...el, location: e.target.value }
                              : el,
                          ),
                        })
                      }
                    />
                  </FormField>
                  <FormField>
                    <Label htmlFor={`university-gpa-${index}`}>GPA</Label>
                    <TextInput
                      id={`university-gpa-${index}`}
                      inputMode="numeric"
                      value={university.gpa}
                      onChange={(e) =>
                        updateData({
                          education: data.education.map((el, i) =>
                            i === index ? { ...el, gpa: e.target.value } : el,
                          ),
                        })
                      }
                    />
                  </FormField>
                  <FormField>
                    <Label htmlFor={`university-achievements-${index}`}>
                      Achievements
                    </Label>
                    <TextArea
                      id={`university-achievements-${index}`}
                      value={university.achievements}
                      onChange={(e) =>
                        updateData({
                          education: data.education.map((el, i) =>
                            i === index
                              ? { ...el, achievements: e.target.value }
                              : el,
                          ),
                        })
                      }
                    />
                  </FormField>
                  <Button
                    type="button"
                    onClick={() =>
                      updateData({
                        education: data.education.filter((_, i) => i !== index),
                      })
                    }
                  >
                    Delete <Trash2 />
                  </Button>
                </Fieldset>
              ))}
              <Button
                type="button"
                onClick={() =>
                  updateData({
                    education: data.education.concat({
                      id: window.crypto.randomUUID(),
                      degree: '',
                      year: '',
                      name: '',
                      location: '',
                      gpa: '',
                      achievements: '',
                    }),
                  })
                }
              >
                Add <PlusSquare />
              </Button>
            </FormSection>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="6">
          <Accordion.Header>Projects</Accordion.Header>
          <Accordion.Panel>
            <FormSection>
              {data.projects.map((project, index) => (
                <Fieldset key={project.id}>
                  <Fieldset.Legend>Project {index + 1}</Fieldset.Legend>
                  <FormField>
                    <Label htmlFor={`project-title-${index}`}>Title</Label>
                    <TextInput
                      id={`project-title-${index}`}
                      value={project.title}
                      onChange={(e) =>
                        updateData({
                          projects: data.projects.map((el, i) =>
                            i === index ? { ...el, title: e.target.value } : el,
                          ),
                        })
                      }
                    />
                  </FormField>
                  <FormField>
                    <Label htmlFor={`project-link-${index}`}>Link</Label>
                    <TextInput
                      id={`project-link-${index}`}
                      value={project.link}
                      onChange={(e) =>
                        updateData({
                          projects: data.projects.map((el, i) =>
                            i === index ? { ...el, link: e.target.value } : el,
                          ),
                        })
                      }
                    />
                  </FormField>
                  <FormField>
                    <Label htmlFor={`project-description-${index}`}>
                      Description
                    </Label>
                    <TextArea
                      id={`project-description-${index}`}
                      value={project.description}
                      onChange={(e) =>
                        updateData({
                          projects: data.projects.map((el, i) =>
                            i === index
                              ? { ...el, description: e.target.value }
                              : el,
                          ),
                        })
                      }
                    />
                  </FormField>
                  <Button
                    type="button"
                    onClick={() =>
                      updateData({
                        projects: data.projects.filter((_, i) => i !== index),
                      })
                    }
                  >
                    Delete <Trash2 />
                  </Button>
                </Fieldset>
              ))}
              <Button
                type="button"
                onClick={() =>
                  updateData({
                    projects: data.projects.concat({
                      id: window.crypto.randomUUID(),
                      title: '',
                      link: '',
                      description: '',
                    }),
                  })
                }
              >
                Add <PlusSquare />
              </Button>
            </FormSection>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="7">
          <Accordion.Header>Awards</Accordion.Header>
          <Accordion.Panel>
            <FormSection>
              {data.awards.map((award, index) => (
                <Fieldset key={award.id}>
                  <Fieldset.Legend>Award {index + 1}</Fieldset.Legend>
                  <FormField>
                    <Label htmlFor={`award-year-${index}`}>Year</Label>
                    <TextInput
                      id={`award-year-${index}`}
                      inputMode="numeric"
                      value={award.year}
                      onChange={(e) =>
                        updateData({
                          awards: data.awards.map((el, i) =>
                            i === index ? { ...el, year: e.target.value } : el,
                          ),
                        })
                      }
                    />
                  </FormField>
                  <FormField>
                    <Label htmlFor={`award-quantification-${index}`}>
                      Quantification
                    </Label>
                    <TextInput
                      id={`award-quantification-${index}`}
                      value={award.quantification}
                      onChange={(e) =>
                        updateData({
                          awards: data.awards.map((el, i) =>
                            i === index
                              ? { ...el, quantification: e.target.value }
                              : el,
                          ),
                        })
                      }
                    />
                  </FormField>
                  <FormField>
                    <Label htmlFor={`award-competition-${index}`}>
                      Competition
                    </Label>
                    <TextInput
                      id={`award-competition-${index}`}
                      value={award.competition}
                      onChange={(e) =>
                        updateData({
                          awards: data.awards.map((el, i) =>
                            i === index
                              ? { ...el, competition: e.target.value }
                              : el,
                          ),
                        })
                      }
                    />
                  </FormField>
                  <Button
                    type="button"
                    onClick={() =>
                      updateData({
                        awards: data.awards.filter((_, i) => i !== index),
                      })
                    }
                  >
                    Delete <Trash2 />
                  </Button>
                </Fieldset>
              ))}
              <Button
                type="button"
                onClick={() =>
                  updateData({
                    awards: data.awards.concat({
                      id: window.crypto.randomUUID(),
                      year: '',
                      quantification: '',
                      competition: '',
                    }),
                  })
                }
              >
                Add <PlusSquare />
              </Button>
            </FormSection>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </form>
  );
};

export default CVForm;
