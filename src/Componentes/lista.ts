import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

export const lista = [
    {
        titulo:"atos administrativos",
        questao:[
            {
                titulo:"questão 1",
                corpo:["questão 1", "questão 2", "questão 3", "questão 4"],
                resposta:"questão 2"
            },
            {
                titulo:"questão 1",
                corpo:["questão 1", "questão 2", "questão 3", "questão 4"],
                resposta:"questão 1"
            },
            {
                titulo:"questão 1",
                corpo:["questão 1", "questão 2", "questão 3", "questão 4"],
                resposta:"questão 3"
            },
            {
                titulo:"questão 1",
                corpo:["questão 1", "questão 2", "questão 3", "questão 4"],
                resposta:"questão 2"
            },
        ],
        materia:"Conteudo da materia de adm publica"
    },
    {
        titulo:"licitações",
        questao:[
            {
                titulo:"questão 1",
                corpo:["questão 1", "questão 2", "questão 3", "questão 4"],
                resposta:"questão 2"
            },
            {
                titulo:"questão 1",
                corpo:["questão 1", "questão 2", "questão 3", "questão 4"],
                resposta:"questão 3"
            },
            {
                titulo:"questão 1",
                corpo:["questão 1", "questão 2", "questão 3", "questão 4"],
                resposta:"questão 1"
            },
            {
                titulo:"questão 1",
                corpo:["questão 1", "questão 2", "questão 3", "questão 4"],
                resposta:"questão 2"
            },
        ],
        materia:"Conteudo da materia de licitações"

    },
    {
        titulo:"Contituição",
        questao:[
            {
                titulo:"questão 1",
                corpo:["questão 1", "questão 2", "questão 3", "questão 4","questão 5"],
                resposta:"questão 2"
            },
            {
                titulo:"questão 2 banca bla bla",
                corpo:["questão 1", "questão 2", "questão 3", "questão 4"],
                resposta:"questão 2"
            },
            {
                titulo:"questão 3 Cespe",
                corpo:["questão 1", "questão 2", "questão 3", "questão 4"],
                resposta:"questão 1"
            },
            {
                titulo:"questão 4 FGV",
                corpo:["questão 1", "questão 2", "questão 3", "questão 4"],
                resposta:"questão 2"
            },
        ],
        materia:"Conteudo da materia de constituição"

    },
]

export const listaDoMenu:any = [
    {
        key:'Direito Administrativo',
        label:'Direito Administrativo',
        icon:null, 
        children:[
            {
                key:'Princípios',
                label:'Princípios',
                icon:null,
                conteudo:`
                  1. Conceito de Ato Administrativo
O ato administrativo é uma manifestação de vontade da Administração Pública, com objetivo de produzir efeitos jurídicos. Ele é realizado sob o regime de direito público, visando a satisfação do interesse público.

2. Características dos Atos Administrativos
Unilateralidade: Em regra, o ato administrativo é unilateral, ou seja, basta a vontade da Administração Pública para sua criação, sem necessidade de concordância de terceiros.
Regime Jurídico de Direito Público: O ato administrativo está sujeito a regras e princípios do direito público, como a legalidade e a supremacia do interesse público.
Finalidade Pública: O ato deve sempre perseguir a satisfação do interesse coletivo, nunca um interesse particular.
Presunção de Legitimidade e Veracidade: Presume-se que os atos administrativos são legais e verdadeiros até prova em contrário.
                `,
                questoes:[
                    {
                        titulo:'titulo da pergunta 1',
                        pergunta:'pergunta 1 de princípios',
                        resposta:'resposta 1 de principios',
                        alternativas:['alternativa a','alternativa b','alter c', 'alter d']
                    },
                    {
                        titulo:'titulo da pergunta 2',
                        pergunta:'pergunta 2 de princípios',
                        resposta:'resposta 2 de principios',
                        alternativas:['alternativa a','alternativa b','alter c', 'alter d']
                    }
                ]
            },
            {
                key: 'Elementos ou Requisitos dos Atos Administrativos',
                label: 'Elementos ou Requisitos dos Atos Administrativos',
                icon:null,
                conteudo:`
                Para ser válido, o ato administrativo precisa atender a cinco elementos:

Competência: O ato deve ser praticado por autoridade que detenha poder legal para tal. A falta de competência gera nulidade.
Finalidade: Deve sempre buscar o interesse público. Um desvio de finalidade pode invalidar o ato.
Forma: A forma, em geral, é escrita, exceto quando a lei permitir outra forma. O descumprimento da forma prescrita pode tornar o ato inválido.
Motivo: É a situação de fato ou de direito que justifica a prática do ato. Se o motivo for falso ou inexistente, o ato pode ser anulado.
Objeto: É o efeito jurídico imediato pretendido pelo ato. O objeto deve ser lícito, possível, determinado e moral.
                `,
                questoes:[]
            },
            {
                key: 'Classificação dos Atos Administrativos',
                label: 'Classificação dos Atos Administrativos',
                icon:null,
                conteudo:`
                
Atos administrativos são um tema fundamental em concursos públicos, especialmente em provas voltadas para carreiras jurídicas e administrativas. Vamos abordar o conceito, as características, os elementos, a classificação e as espécies de atos administrativos, com foco no que costuma ser cobrado em concursos.

1. Conceito de Ato Administrativo
O ato administrativo é uma manifestação de vontade da Administração Pública, com objetivo de produzir efeitos jurídicos. Ele é realizado sob o regime de direito público, visando a satisfação do interesse público.

2. Características dos Atos Administrativos
Unilateralidade: Em regra, o ato administrativo é unilateral, ou seja, basta a vontade da Administração Pública para sua criação, sem necessidade de concordância de terceiros.
Regime Jurídico de Direito Público: O ato administrativo está sujeito a regras e princípios do direito público, como a legalidade e a supremacia do interesse público.
Finalidade Pública: O ato deve sempre perseguir a satisfação do interesse coletivo, nunca um interesse particular.
Presunção de Legitimidade e Veracidade: Presume-se que os atos administrativos são legais e verdadeiros até prova em contrário.
3. Elementos ou Requisitos dos Atos Administrativos
Para ser válido, o ato administrativo precisa atender a cinco elementos:

Competência: O ato deve ser praticado por autoridade que detenha poder legal para tal. A falta de competência gera nulidade.
Finalidade: Deve sempre buscar o interesse público. Um desvio de finalidade pode invalidar o ato.
Forma: A forma, em geral, é escrita, exceto quando a lei permitir outra forma. O descumprimento da forma prescrita pode tornar o ato inválido.
Motivo: É a situação de fato ou de direito que justifica a prática do ato. Se o motivo for falso ou inexistente, o ato pode ser anulado.
Objeto: É o efeito jurídico imediato pretendido pelo ato. O objeto deve ser lícito, possível, determinado e moral.
4. Classificação dos Atos Administrativos
Os atos administrativos podem ser classificados de várias formas, sendo as mais cobradas em concursos:

Quanto ao destinatário:
Atos gerais: dirigidos a um número indeterminado de pessoas (ex: regulamentos).
Atos individuais: dirigidos a destinatários específicos (ex: uma licença para dirigir).
Quanto ao alcance:
Atos internos: produzem efeitos dentro da Administração (ex: portarias internas).
Atos externos: produzem efeitos externos, atingindo terceiros (ex: uma multa de trânsito).
Quanto à formação da vontade:
Atos simples: formados pela manifestação de vontade de um único órgão.
Atos complexos: exigem a manifestação de vontade de mais de um órgão para sua formação.
Atos compostos: manifestam-se com a vontade de um órgão principal, dependendo de aprovação de outro órgão (ex: atos que exigem ratificação).
                `,
                questoes:[
                    {
                        titulo:'CESPE/CEBRASPE - Juiz Substituto 2022',
                        pergunta:'Qual o elemento dos atos administrativos que se refere à circunstância de fato ou de direito que justifica sua prática?',
                        resposta:'Motivo',
                        alternativas:['Competência','Finalidade','Motivo', 'Forma'],
                        nivel:"",
                        banca:""
                    },
                    {
                        titulo:'Analista Judiciário (TRT 5ª Região) 2018',
                        pergunta:'Sobre os atos administrativos, assinale a alternativa correta:',
                        resposta:' Atos administrativos vinculados não admitem discricionariedade.',
                        alternativas:[
                            'A forma do ato administrativo é irrelevante, desde que sua finalidade seja atendida.',
                            'Todos os atos administrativos podem ser revogados, independentemente de sua legalidade.',
                            'Atos administrativos vinculados não admitem discricionariedade.',
                            'A presunção de legitimidade dos atos administrativos é absoluta e não admite contestação'
                        ],
                        nivel:"Superior",
                        banca:"Cespe"
                    },
                    {
                        titulo:'CESPE/CEBRASPE - Juiz Substituto 2022',
                        pergunta:'Qual o elemento dos atos administrativos que se refere à circunstância de fato ou de direito que justifica sua prática?',
                        resposta:'Motivo',
                        alternativas:['Competência','Finalidade','Motivo', 'Forma'],
                        nivel:"",
                        banca:""
                    },
                    {
                        titulo:'Agente de Trânsito 2021',
                        pergunta:'A respeito dos atos administrativos, é correto afirmar que:',
                        resposta:'A finalidade do ato administrativo deve sempre buscar o interesse público.',
                        alternativas:[
                            'A nulidade dos atos administrativos é sempre relativa.',
                            'O ato administrativo deve sempre ser praticado de forma escrita.',
                            'Atos administrativos podem ser anulados apenas por decisão judicial.',
                            'A finalidade do ato administrativo deve sempre buscar o interesse público.'
                        ],
                        nivel:"Médio",
                        banca:"FGV"
                    },
                    {
                        titulo:'FGV - Técnico Administrativo 2021',
                        pergunta:'Sobre os atos administrativos, assinale a afirmativa correta:',
                        resposta:'A competência pode ser delegada, salvo disposição legal em contrário',
                        alternativas:[
                            'Todos os atos administrativos são vinculados',
                            'A competência pode ser delegada, salvo disposição legal em contrário',
                            'Os atos normativos são exemplos de atos enunciativos', 
                            'A presunção de legitimidade e veracidade dos atos administrativos é absoluta'
                        ]
                    },
                ]
            },
            {
                key: 'Agentes Públicos',
                label: 'Agentes Públicos',
                icon: null,
                conteudo:'conteúdo da matéria de Agentes publicos',
                questoes:[
                    {
                        titulo:'titulo da pergunta 1',
                        pergunta:'pergunta 1 de p',
                        resposta:'resposta 1 de agentes publicos',
                        alternativas:['alternativa a','alternativa b','alter c', 'alter d']
                    },
                    {
                        titulo:'titulo da pergunta 2',
                        pergunta:'pergunta 2 de princípios',
                        resposta:'resposta 2 de principios',
                        alternativas:['alternativa a','alternativa b','alter c', 'alter d']
                    }
                ],
                children: [
                  { 
                    key: 'Poderes',
                    label: 'Poderes',
                    icon: null,
                    conteudo:'conteúdo da matéria de Agentes publicos',
                    questoes:[
                        {
                            titulo:'titulo da pergunta 1',
                            pergunta:'pergunta 1 de p',
                            resposta:'resposta 1 de agentes publicos',
                            alternativas:['alternativa a','alternativa b','alter c', 'alter d']
                        },
                        {
                            titulo:'titulo da pergunta 2',
                            pergunta:'pergunta 2 de princípios',
                            resposta:'resposta 2 de principios',
                            alternativas:['alternativa a','alternativa b','alter c', 'alter d']
                        }
                    ], 
                },
                { key: 'Deveres', 
                    label: 'Deveres',
                    icon: null,
                    conteudo:'conteúdo da matéria de deveres',
                    questoes:[
                        {
                            titulo:'titulo da pergunta 1 de deveres',
                            pergunta:'pergunta 1 de p',
                            resposta:'resposta 1 de agentes publicos',
                            alternativas:['alternativa a','alternativa b','alter c', 'alter d']
                        },
                        {
                            titulo:'titulo da pergunta 2',
                            pergunta:'pergunta 2 de princípios',
                            resposta:'resposta 2 de principios',
                            alternativas:['alternativa a','alternativa b','alter c', 'alter d']
                        }
                    ], 
                    
                    
                },
                //   {
                //     key: 'sub3',
                //     label: 'Submenu',
                //     children: [
                //       { key: '7', label: 'Option 7' },
                //       { key: '8', label: 'Option 8' },
                //     ],
                //   },
                ],
            },
        ]
    },
    {
        key:'Matemática',
        label:'Matemática',
        icon:null, 
        children:[
            {
                key:'Funções',
                label:'Funções',
                icon:null,
                children:[
                    {
                        key: 'Funções Afins',
                        label: 'Funções Afins',
                        icon: null,
                        conteudo:'conteúdo da matéria de Funções Afins',
                        questoes:[
                            {
                                titulo:'titulo da pergunta 1',
                                pergunta:'pergunta 1 de p',
                                resposta:'resposta 1 de agentes publicos',
                                alternativas:['alternativa a','alternativa b','alter c', 'alter d']
                            },
                            {
                                titulo:'titulo da pergunta 2',
                                pergunta:'pergunta 2 de princípios',
                                resposta:'resposta 2 de principios',
                                alternativas:['alternativa a','alternativa b','alter c', 'alter d']
                            }
                        ],
                    },
                    {
                        key: 'Funções Quadráticas',
                        label: 'Funções Quadráticas',
                        icon: null,
                        conteudo:'conteúdo da matéria de Funções Quadráticas',
                        questoes:[
                            {
                                titulo:'titulo da pergunta 1',
                                pergunta:'pergunta 1 de p',
                                resposta:'resposta 1 de agentes publicos',
                                alternativas:['alternativa a','alternativa b','alter c', 'alter d']
                            },
                            {
                                titulo:'titulo da pergunta 2',
                                pergunta:'pergunta 2 de princípios',
                                resposta:'resposta 2 de principios',
                                alternativas:['alternativa a','alternativa b','alter c', 'alter d']
                            }
                        ],
                        children: [
                          { 
                            key: 'Funções Quadráticas 1',
                            label: 'Funções Quadráticas 1',
                            icon: null,
                            conteudo:'conteúdo da matéria de Agentes publicos',
                            questoes:[
                                {
                                    titulo:'titulo da pergunta 1',
                                    pergunta:'pergunta 1 de p',
                                    resposta:'resposta 1 de agentes publicos',
                                    alternativas:['alternativa a','alternativa b','alter c', 'alter d']
                                },
                                {
                                    titulo:'titulo da pergunta 2',
                                    pergunta:'pergunta 2 de princípios',
                                    resposta:'resposta 2 de principios',
                                    alternativas:['alternativa a','alternativa b','alter c', 'alter d']
                                }
                            ], 
                        },
                        { key: 'Funções Quadráticas 2', 
                            label: 'Funções Quadráticas 2',
                            icon: null,
                            conteudo:'conteúdo da matéria de deveres',
                            questoes:[
                                {
                                    titulo:'titulo da pergunta 1 de deveres',
                                    pergunta:'pergunta 1 de p',
                                    resposta:'resposta 1 de agentes publicos',
                                    alternativas:['alternativa a','alternativa b','alter c', 'alter d']
                                },
                                {
                                    titulo:'titulo da pergunta 2',
                                    pergunta:'pergunta 2 de princípios',
                                    resposta:'resposta 2 de principios',
                                    alternativas:['alternativa a','alternativa b','alter c', 'alter d']
                                }
                            ], 
                            
                            
                        },
                        //   {
                        //     key: 'sub3',
                        //     label: 'Submenu',
                        //     children: [
                        //       { key: '7', label: 'Option 7' },
                        //       { key: '8', label: 'Option 8' },
                        //     ],
                        //   },
                        ],
                    },
                ]
            },
        ]
    },
]


export const data = [
    {
      id: '1',
      name: "Category 1",
      items: [
        { id: '101', name: "Item 101" },
        { id: '102', name: "Item 102" },
        {
          id: '103', name: "Item 103", items: [
            { id: '301', name: "Item 301" },
            { 
                id: '302', 
                name: "Item 302",
                items:[
                  {
                    id: '402', 
                    name: "Item 402",
                  }    
                ] 
            }
          ]
        }
      ]
    },
    {
      id: '2',
      name: "Category 2",
      items: [
        { id: '201', name: "Item 201" },
        { id: '202', name: "Item 202" }
      ]
    }
  ];


  export const apiFake = [
	{
		"id": "66fd775a6cd7e6eca23ce3fe",
		"idUsuario": "668c6b8dbe2b1eac0e1208b4",
		"icon": "",
		"key": "Direito Administrativo",
		"label": "Direito Administrativo",
		"children": [
			{
				"id": "66fd791a0a60ccabda13e6d6",
				"idMaterias": "66fd775a6cd7e6eca23ce3fe",
				"idUsuario": null,
				"children": [
                    {
                        "id": "66fecbdc6341c9ca3ed5cd50",
                        "idMaterias": "66fecac56341c9ca3ed5cd4c",
                        "idUsuario": "66fec8e3d5d1d72a426ada50",
                        "children": "",
                        "conteudo": "Aula sobre texto",
                        "icon": "",
                        "key": "texto",
                        "label": "texto",
                        questoes:[
                            {
                                titulo:'titulo da pergunta texto',
                                pergunta:'pergunta 1',
                                resposta:'alternativa a',
                                alternativas:['alternativa a','alternativa b','alter c', 'alter d']
                            },
                            {
                                titulo:'titulo da pergunta 2',
                                pergunta:'pergunta 2 de princípios',
                                resposta:'alternativa b',
                                alternativas:['alternativa a','alternativa b','alter c', 'alter d']
                            }
                        ], 
                    }
                ],
				"conteudo": "Aula sobre atos administrativos",
				"icon": "",
				"key": "Atos Administrativos",
				"label": "Atos Administrativos",
                questoes:[
                    {
                        titulo:'titulo da pergunta 1 de deveres',
                        pergunta:'pergunta 1 de p',
                        resposta:'alternativa a',
                        alternativas:['alternativa a','alternativa b','alter c', 'alter d']
                    },
                    {
                        titulo:'titulo da pergunta 2',
                        pergunta:'pergunta 2 de princípios',
                        resposta:'alternativa b',
                        alternativas:['alternativa a','alternativa b','alter c', 'alter d']
                    }
                ], 
			},
			{
				"id": "66fd81040a60ccabda13e6d7",
				"idMaterias": "66fd775a6cd7e6eca23ce3fe",
				"idUsuario": null,
				"children": "",
				"conteudo": "Aula sobre Serviços Púublicos",
				"icon": "",
				"key": "Serviços públicos",
				"label": "Serviços públicos"
			},
			{
				"id": "66fecb016341c9ca3ed5cd4d",
				"idMaterias": "66fd775a6cd7e6eca23ce3fe",
				"idUsuario": "66fec8e3d5d1d72a426ada50",
				"children": "",
				"conteudo": "Aula sobre Ortografia",
				"icon": "",
				"key": "Ortografia",
				"label": "Ortografia"
			}
		],
		"usuario": {
			"id": "668c6b8dbe2b1eac0e1208b4",
			"nome": "Fabio Oliveira",
			"email": "fabio@gmail.com"
		}
	},
	{
		"id": "66fecac56341c9ca3ed5cd4c",
		"idUsuario": "66fec8e3d5d1d72a426ada50",
		"icon": "",
		"key": "Português",
		"label": "Português",
		"children": [
			{
				"id": "66fecbdc6341c9ca3ed5cd50",
				"idMaterias": "66fecac56341c9ca3ed5cd4c",
				"idUsuario": "66fec8e3d5d1d72a426ada50",
				"children": "",
				"conteudo": "Aula sobre Interpretação de texto",
				"icon": "",
				"key": "Interpretação de texto",
				"label": "Interpretação de texto"
			}
		],
		"usuario": {
			"id": "66fec8e3d5d1d72a426ada50",
			"nome": "Ruth Gomes",
			"email": "ruth@gmail.com"
		}
	}
]

export const listaTeste = [
    {
        key:"Portugues",
        icon:"",
        children:"",
        label:"Portugues",
    },
    {
        key:"Matemática",
        icon:"",
        children:[
            {
                key:"PA",
                icon:"",
                children:"",
                label:"PA",
            }
        ],
        label:"Matemática",
    }
] 