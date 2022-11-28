import { useId } from 'react'

import { Container } from '@/components/Container'

const features = [
  {
    name: 'Flutter',
    description:
      'Flutter fue usado para el apartado de DiseÃ±o y modelamiento visual del aplicativo.',
    icon: DeviceArrowIcon,
  },
  {
    name: 'Railway',
    description:
      'Alojamiento de nuestros microservicios.',
    icon: DeviceCardsIcon,
  },
  {
    name: 'Mongodb',
    description:
      'Usado para el almacenamiento ,nuestra base de datos.',
    icon: DeviceClockIcon,
  },
  {
    name: 'Express',
    description:
      'Funcionamiento para el mecanisco de peticiones Https en diferentes rutas de URL.',
    icon: DeviceListIcon,
  },
  {
    name: 'Nodejs',
    description:
      'Usado parael entorno de ejecucion y conexiones sin ningun bloqueo.',
    icon: DeviceLockIcon,
  },
  {
    name: 'GitHub',
    description:
      'Correcto trabajo colaboratorio ,proyecto Team.',
    icon: DeviceChartIcon,
  },
]

function DeviceArrowIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.5 12.5L6.5 15.5 19 3 13 3zM19 12L13 12 8 17 13 22 19 22 14 17z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.5 12.5L6.5 15.5 19 3 13 3zM19 12L13 12 8 17 13 22 19 22 14 17z"
        fill="#171717"
      />
      <path
        d="M3.5 12.5L6.5 15.5 19 3 13 3zM19 12L13 12 8 17 13 22 19 22 14 17z"
        stroke="#737373"
        strokeWidth={2}
        strokeLinecap="square"
      />
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
    </svg>
  )
}

function DeviceCardsIcon(props) {
  let id = useId()

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#737373"
      />
      <path
        d="M12 25l8-8m0 0h-6m6 0v6"
        stroke="#171717"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
    </svg>
  )
}

function DeviceClockIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.906 12.693c-1.682-7.417-5.656-9.849-6.083-10.781-0.469-0.661-0.974-1.911-0.974-1.911-0.005 0.026-0.005 0.042-0.010 0.068v0.016c0 0.021-0.005 0.031-0.005 0.052v0.021h-0.005c0 0.010 0 0.021 0 0.031v0.036h-0.005c0 0.010 0 0.026-0.005 0.031v0.031c0 0.010 0 0.021-0.005 0.026v0.026c0 0.016 0 0.031-0.005 0.042v0.005c0 0.021-0.005 0.047-0.010 0.068v0.010c-0.005 0.005-0.005 0.010-0.005 0.016v0.021h-0.005v0.031h-0.005v0.021h-0.010v0.031h-0.005v0.026h-0.005v0.021h-0.005v0.021h-0.005v0.021h-0.005v0.021h-0.005v0.016h-0.005v0.021h-0.005c0 0 0 0.005 0 0.005v0.016h-0.005c-0.005 0-0.005 0.005-0.005 0.005v0.010c0 0-0.005 0.010-0.005 0.010 0 0.010-0.005 0.021-0.010 0.031-0.005 0.005-0.005 0.005-0.005 0.010v0.010h-0.005v0.010h-0.010v0.026h-0.010v0.016h-0.005v0.005h-0.005v0.010h-0.005v0.016h-0.005v0.010h-0.010v0.016h-0.005v0.010h-0.005v0.010h-0.005v0.016h-0.005v0.010h-0.005v0.005h-0.005v0.010h-0.010v0.016h-0.005v0.005h-0.005v0.010h-0.005v0.016h-0.005v0.005h-0.005v0.010h-0.005v0.005h-0.005v0.016h-0.010v0.005h-0.005v0.010h-0.005v0.005h-0.005v0.010h-0.005c0 0.005 0 0.005 0 0.005v0.005c-0.005 0-0.005 0.005-0.005 0.005v0.005h-0.005c-0.005 0.010-0.010 0.016-0.016 0.026 0 0-0.010 0.010-0.010 0.016-0.005 0-0.005 0.005-0.005 0.005v0.005h-0.005v0.005h-0.005c0 0 0 0 0 0.005v0.005h-0.010v0.005c0 0-0.005 0-0.005 0v0.005h-0.005c0 0 0 0.005 0 0.005v0.010h-0.005v0.005h-0.005v0.005h-0.005v0.010h-0.005v-0.010h-0.010v0.005h-0.005v0.010h-0.005v0.010h-0.005v0.005h-0.005v0.005h-0.005v0.005h-0.005v0.010h-0.010v0.005h-0.005v0.010h-0.005v0.005h-0.005v0.005h-0.005v0.016h-0.005v0.005h-0.005v0.005h-0.005v0.005h-0.005v0.005h-0.010v0.010h-0.005v0.005h-0.005v0.005h-0.005v0.010h-0.005v0.005h-0.010v0.005h-0.005v0.005h-0.005v0.010h-0.005v0.010h-0.005v0.005h-0.005v0.005h-0.010v0.005h-0.005v0.005h-0.005v0.010h-0.005v0.005h-0.005v0.010h-0.005v0.005h-0.005v0.005h-0.005v0.005h-0.005v0.005h-0.010v0.005c-0.005 0-0.005 0.005-0.005 0.005l-0.005 0.005c0 0-0.005 0.005-0.005 0.005v0.010h-0.005v0.005h-0.005v0.005h-0.005v0.005h-0.005l-0.010 0.010v0.005c-0.010 0.005-0.010 0.010-0.021 0.021 0 0-0.010 0.010-0.016 0.010-0.016 0.010-0.036 0.031-0.052 0.047-0.010 0.005-0.021 0.016-0.031 0.021-0.021 0.021-0.042 0.036-0.063 0.052-0.031 0.031-0.063 0.052-0.099 0.083h-0.005c-0.073 0.063-0.156 0.135-0.245 0.214h-0.005c-0.224 0.198-0.49 0.453-0.792 0.755l-0.026 0.026c-1.813 1.875-4.672 5.786-4.969 12.104-0.031 0.521-0.026 1.031 0.005 1.526v0.010c0.146 2.49 0.927 4.615 1.906 6.344 0.385 0.688 0.807 1.313 1.234 1.875 1.469 1.938 2.969 3.089 3.349 3.37 0.589 1.359 0.536 3.703 0.536 3.703l0.859 0.286c0 0-0.177-2.266 0.068-3.365 0.078-0.339 0.255-0.63 0.464-0.88 0.146-0.099 0.563-0.401 1.063-0.859 0.026-0.026 0.042-0.047 0.063-0.073 2.026-1.891 5.813-6.547 4.516-14.13z"
        fill="#100F13"
      />

    </svg>
  )
}

function DeviceListIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v10h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h5v2H9a4 4 0 01-4-4V4z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 32a8 8 0 100-16 8 8 0 000 16zm1-8.414V19h-2v5.414l4 4L28.414 27 25 23.586z"
        fill="#171717"
      />
    </svg>
  )
}

function DeviceLockIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#737373"
      />
      <circle cx={11} cy={14} r={2} fill="#171717" />
      <circle cx={11} cy={20} r={2} fill="#171717" />
      <circle cx={11} cy={26} r={2} fill="#171717" />
      <path
        d="M16 14h6M16 20h6M16 26h6"
        stroke="#737373"
        strokeWidth={2}
        strokeLinecap="square"
      />
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
    </svg>
  )
}

function DeviceChartIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"
        fill="#171717"
      />
      <path
        d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"
        stroke="#737373"
        strokeWidth={2}
        strokeLinecap="square"
      />
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
    </svg>
  )
}

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
            Tecnologias Del Proyecto
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Las tecnologais usadas en el proyecto "ComelOso" fueron diversas y complejas para el uso optimo del aplicativo visual y funcional.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {features.map((feature) => (
            <li
              key={feature.name}
              className="rounded-2xl border border-gray-200 p-8"
            >
              <feature.icon className="h-8 w-8" />
              <h3 className="mt-6 font-semibold text-gray-900">
                {feature.name}
              </h3>
              <p className="mt-2 text-gray-700">{feature.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}