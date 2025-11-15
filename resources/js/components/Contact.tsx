import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useTrans } from '@/hooks/use-trans';
import { ContactData } from '@/types/contact-data';
import ContactForm from './public/contact/contact-form';
import { t } from 'i18next';

interface ContactProps {
  contactData?: ContactData;
}

const Contact: React.FC<ContactProps> = ({ contactData }) => {
  const trans = useTrans();
  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{contactData?.title ? trans(contactData.title) : ''}</h2>
          <p className="section-subtitle mx-auto">
            {contactData?.subtitle ? trans(contactData.subtitle) : ''}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-6">{t('contact.contactInformation')}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              {contactData?.description ? trans(contactData.description) : ''}
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary-50 dark:bg-primary-900/30 p-3 rounded-lg text-primary-600 dark:text-primary-400">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium">{t('contact.email')}</h4>
                  <a href={`mailto:${contactData?.email || ''}`} className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    {contactData?.email || ''}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-50 dark:bg-primary-900/30 p-3 rounded-lg text-primary-600 dark:text-primary-400">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium">{t('contact.phone')}</h4>
                  <a href={`tel:${contactData?.phone || ''}`} className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    {contactData?.phone || ''}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-50 dark:bg-primary-900/30 p-3 rounded-lg text-primary-600 dark:text-primary-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium">{t('contact.location')}</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {contactData?.location || ''}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-3"
          >
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-6">{t('contact.sendMessage')}</h3>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;