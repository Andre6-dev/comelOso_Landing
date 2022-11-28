import Link from 'next/link'

import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'Como Funciona el Aplicativo?',
      answer:
        'Su funcionamiento es mediante la nube y los microservicios ,el diseño mediante Flutter,haciendo uso del corrego de Google para la autentificacion del login.',
    },
    {
      question: 'Cual es el precio del aplicativo?',
      answer:
        'Por el momento nuestro aplicativo tiene una opcion gratuita y premium,las cuales brindan servicios similares , ofreciendo el premium una opcion extra.',
    },

  ],
  [
    {
      question: 'Como podria ingresar de inversionista?',
      answer:
        'Mediante el presente proyecto se aceptan todo tipo de donaciones , inversiones y prestaciones del servicio mediante el stand y los diversos numeros de cuentas brindados.',
    },
    {
      question: 'Cual es el objetivo del aplicativo?',
      answer:
        'Promover un servicio que facilite al usuario su interaccion con la compra de algun desayuno , almuerzo o cena,incluso un aperitivo sin necesidad de conocer el entorno en el que se encuentre.',
    }
  ],
  [
    {
      question: 'Cual es la base del proyecto y como afrontara a la competencia del mercado?',
      answer:
        'Nuestro proyecto es desplegado mediante el servicio de Railway,la manera de afrotnar el mercado es brindado un extra a lo ya existente,asi como mejorar la privacidad que tenga el usuario con el aplicativo y no recopilar su informacion para otros fines.',
    },
    {
      question: 'La aplicacion Invade la privacidad ?',
      answer:
        'No, ya que nuestro aplicativo solo recopila datos para el mejor funcionamiento del mismo ,tanto con su registro y apartado de mapa,es importante saber tambien que a futuro tampoco deseamos tratar con esta data personal.',
    },

  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Preguntas Frecuentes
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Si tienes algo más que quieras preguntar,{' '}
            <Link
              href="mailto:andre.gallegos@tecsup.edu.pe"
              className="text-gray-900 underline"
            >
              Contactamos
            </Link>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}