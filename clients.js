
const clients = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    address: "123 Main St, Anytown, USA",
    isCorporateClient: true,
    companyName: "TechCorp Inc.",
    email: "john.doe@techcorp.com",
    password: "password123",
    phoneNumber: "555-123-4567",
    milesAccumulated: 5000
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    address: "456 Elm St, Othertown, USA",
    isCorporateClient: false,
    email: "jane.smith@example.com",
    password: "password456",
    phoneNumber: "555-234-5678",
    milesAccumulated: 3000
  },
  {
    id: 3,
    firstName: "Alice",
    lastName: "Johnson",
    address: "789 Oak St, Sometown, USA",
    isCorporateClient: true,
    companyName: "Innovate Solutions",
    email: "alice.johnson@innovatesolutions.com",
    password: "password789",
    phoneNumber: "555-345-6789",
    milesAccumulated: 7000
  },
  {
    id: 4,
    firstName: "Bob",
    lastName: "Brown",
    address: "101 Pine St, Anothertown, USA",
    isCorporateClient: false,
    email: "bob.brown@example.com",
    password: "password101",
    phoneNumber: "555-456-7890",
    milesAccumulated: 2000
  },
  {
    id: 5,
    firstName: "Carol",
    lastName: "Davis",
    address: "202 Maple St, Yetanothertown, USA",
    isCorporateClient: true,
    companyName: "Enterprise Holdings",
    email: "carol.davis@enterprise.com",
    password: "password202",
    phoneNumber: "555-567-8901",
    milesAccumulated: 6000
  }
];

const flights = [
  {
    flightId: 1,
    flightDate: "2025-02-15T10:00:00-05:00",
    fromDestination: "ATL",
    toDestination: "BOS",
    flightNumber: "UA607",
    confirmationNumber: "88990011",
    landingDate: "2025-02-15T13:00:00-05:00",
    seatId: "25B",
    seatType: "Economy",
    baseCost: 200,
    flightStatus: "available",
  },
  {
    flightId: 2,
    flightDate: "2025-02-16T11:00:00-05:00",
    fromDestination: "LAX",
    toDestination: "JFK",
    flightNumber: "AA123",
    confirmationNumber: "12345678",
    landingDate: "2025-02-16T19:00:00-05:00",
    seatId: "12A",
    seatType: "First Class",
    baseCost: 500,
    flightStatus: "available",
  },
  {
    flightId: 3,
    flightDate: "2025-02-17T12:00:00-05:00",
    fromDestination: "ORD",
    toDestination: "MIA",
    flightNumber: "UA456",
    confirmationNumber: "87654321",
    landingDate: "2025-02-17T16:00:00-05:00",
    seatId: "14C",
    seatType: "Economy",
    baseCost: 150,
    flightStatus: "available",
  },
  {
    flightId: 4,
    flightDate: "2025-02-18T13:00:00-05:00",
    fromDestination: "SFO",
    toDestination: "SEA",
    flightNumber: "DL789",
    confirmationNumber: "11223344",
    landingDate: "2025-02-18T15:00:00-05:00",
    seatId: "15D",
    seatType: "Economy",
    baseCost: 120,
    flightStatus: "available",
  },
  {
    flightId: 5,
    flightDate: "2025-02-19T14:00:00-05:00",
    fromDestination: "DFW",
    toDestination: "DEN",
    flightNumber: "AA202",
    confirmationNumber: "33445566",
    landingDate: "2025-02-19T16:00:00-05:00",
    seatId: "18A",
    seatType: "First Class",
    baseCost: 400,
    flightStatus: "available",
  },
  {
    flightId: 6,
    flightDate: "2025-02-20T09:00:00-05:00",
    fromDestination: "ATL",
    toDestination: "LAX",
    flightNumber: "DL101",
    confirmationNumber: "44556677",
    landingDate: "2025-02-20T12:00:00-05:00",
    seatId: "22C",
    seatType: "Economy",
    baseCost: 250,
    flightStatus: "available",
  },
  {
    flightId: 7,
    flightDate: "2025-02-21T08:00:00-05:00",
    fromDestination: "ATL",
    toDestination: "LAX",
    flightNumber: "UA202",
    confirmationNumber: "55667788",
    landingDate: "2025-02-21T10:00:00-05:00",
    seatId: "10B",
    seatType: "Economy",
    baseCost: 180,
    flightStatus: "available",
  },
  {
    flightId: 8,
    flightDate: "2025-02-22T07:00:00-05:00",
    fromDestination: "JFK",
    toDestination: "MIA",
    flightNumber: "AA303",
    confirmationNumber: "66778899",
    landingDate: "2025-02-22T10:00:00-05:00",
    seatId: "5A",
    seatType: "First Class",
    baseCost: 350,
    flightStatus: "available",
  },
  {
    flightId: 9,
    flightDate: "2025-02-23T06:00:00-05:00",
    fromDestination: "BOS",
    toDestination: "SFO",
    flightNumber: "DL404",
    confirmationNumber: "77889900",
    landingDate: "2025-02-23T09:00:00-05:00",
    seatId: "8C",
    seatType: "Economy",
    baseCost: 300,
    flightStatus: "available",
  },
  {
    flightId: 10,
    flightDate: "2025-02-24T05:00:00-05:00",
    fromDestination: "SEA",
    toDestination: "DFW",
    flightNumber: "UA505",
    confirmationNumber: "88990011",
    landingDate: "2025-02-24T08:00:00-05:00",
    seatId: "9D",
    seatType: "Economy",
    baseCost: 220,
    flightStatus: "available",
  },
  {
    flightId: 11,
    flightDate: "2025-02-25T04:00:00-05:00",
    fromDestination: "MIA",
    toDestination: "ATL",
    flightNumber: "AA606",
    confirmationNumber: "99001122",
    landingDate: "2025-02-25T07:00:00-05:00",
    seatId: "11A",
    seatType: "Economy",
    baseCost: 200,
    flightStatus: "available",
  },
  {
    flightId: 12,
    flightDate: "2025-02-26T03:00:00-05:00",
    fromDestination: "DEN",
    toDestination: "LAX",
    flightNumber: "DL707",
    confirmationNumber: "00112233",
    landingDate: "2025-02-26T06:00:00-05:00",
    seatId: "13B",
    seatType: "Economy",
    baseCost: 180,
    flightStatus: "available",
  },
  {
    flightId: 13,
    flightDate: "2025-02-27T02:00:00-05:00",
    fromDestination: "ORD",
    toDestination: "JFK",
    flightNumber: "UA808",
    confirmationNumber: "11223344",
    landingDate: "2025-02-27T05:00:00-05:00",
    seatId: "14C",
    seatType: "Economy",
    baseCost: 150,
    flightStatus: "available",
  },
  {
    flightId: 14,
    flightDate: "2025-02-28T01:00:00-05:00",
    fromDestination: "SFO",
    toDestination: "ATL",
    flightNumber: "DL909",
    confirmationNumber: "22334455",
    landingDate: "2025-02-28T04:00:00-05:00",
    seatId: "15D",
    seatType: "Economy",
    baseCost: 120,
    flightStatus: "available",
  },
  {
    flightId: 15,
    flightDate: "2025-03-01T00:00:00-05:00",
    fromDestination: "LAX",
    toDestination: "SEA",
    flightNumber: "UA010",
    confirmationNumber: "33445566",
    landingDate: "2025-03-01T03:00:00-05:00",
    seatId: "16A",
    seatType: "First Class",
    baseCost: 400,
    flightStatus: "available",
  },
  {
    "flightId": 16,
    "flightDate": "2025-03-02T00:00:00-05:00",
    "fromDestination": "JFK",
    "toDestination": "DFW",
    "flightNumber": "UA011",
    "confirmationNumber": "33445567",
    "landingDate": "2025-03-02T03:00:00-05:00",
    "seatId": "17B",
    "seatType": "Fist Class",
    "baseCost": 420,
    "flightStatus": "available"
  },
  {
    "flightId": 17,
    "flightDate": "2025-03-03T00:00:00-05:00",
    "fromDestination": "ORD",
    "toDestination": "DEN",
    "flightNumber": "UA012",
    "confirmationNumber": "33445568",
    "landingDate": "2025-03-03T03:00:00-05:00",
    "seatId": "18C",
    "seatType": "Economy",
    "baseCost": 380,
    "flightStatus": "available"
  }, {
    "flightId": 18,
    "flightDate": "2025-03-04T00:00:00-05:00",
    "fromDestination": "ATL",
    "toDestination": "BOS",
    "flightNumber": "UA013",
    "confirmationNumber": "33445569",
    "landingDate": "2025-03-04T03:00:00-05:00",
    "seatId": "19D",
    "seatType": "First Class",
    "baseCost": 410,
    "flightStatus": "available"
  },
  {
    "flightId": 19,
    "flightDate": "2025-03-05T00:00:00-05:00",
    "fromDestination": "MIA",
    "toDestination": "SFO",
    "flightNumber": "UA014",
    "confirmationNumber": "33445570",
    "landingDate": "2025-03-05T03:00:00-05:00",
    "seatId": "20E",
    "seatType": "Fist Class",
    "baseCost": 430,
    "flightStatus": "available"
  },
  {
    "flightId": 20,
    "flightDate": "2025-03-06T00:00:00-05:00",
    "fromDestination": "LAX",
    "toDestination": "JFK",
    "flightNumber": "UA015",
    "confirmationNumber": "33445571",
    "landingDate": "2025-03-06T03:00:00-05:00",
    "seatId": "21F",
    "seatType": "Economy",
    "baseCost": 370,
    "flightStatus": "available"
  }, {
    "flightId": 21,
    "flightDate": "2025-03-07T00:00:00-05:00",
    "fromDestination": "ORD",
    "toDestination": "MIA",
    "flightNumber": "UA016",
    "confirmationNumber": "33445572",
    "landingDate": "2025-03-07T03:00:00-05:00",
    "seatId": "22A",
    "seatType": "First Class",
    "baseCost": 390,
    "flightStatus": "available"
  }, {
    "flightId": 22,
    "flightDate": "2025-03-08T00:00:00-05:00",
    "fromDestination": "SFO",
    "toDestination": "SEA",
    "flightNumber": "UA017",
    "confirmationNumber": "33445573",
    "landingDate": "2025-03-08T03:00:00-05:00",
    "seatId": "23B",
    "seatType": "Fist Class",
    "baseCost": 415,
    "flightStatus": "available"
  },
  {
    "flightId": 23,
    "flightDate": "2025-03-09T00:00:00-05:00",
    "fromDestination": "DFW",
    "toDestination": "DEN",
    "flightNumber": "UA018",
    "confirmationNumber": "33445574",
    "landingDate": "2025-03-09T03:00:00-05:00",
    "seatId": "24C",
    "seatType": "Economy",
    "baseCost": 375,
    "flightStatus": "available"
  },
  {
    "flightId": 24,
    "flightDate": "2025-03-04T00:00:00-05:00",
    fromDestination: "ATL",
    toDestination: "LAX",
    "flightNumber": "UA011",
    "confirmationNumber": "33445569",
    "landingDate": "2025-03-04T03:00:00-05:00",
    "seatId": "19D",
    "seatType": "First Class",
    "baseCost": 410,
    "flightStatus": "available"
  },
  {
    "flightId": 25,
    "flightDate": "2025-03-04T00:00:00-05:00",
    "fromDestination": "ATL",
    "toDestination": "BOS",
    "flightNumber": "UA013",
    "confirmationNumber": "33445569",
    "landingDate": "2025-03-04T03:00:00-05:00",
    "seatId": "19D",
    "seatType": "First Class",
    "baseCost": 410,
    "flightStatus": "available"
  },
  {
    "flightId": 26,
    "flightDate": "2025-03-04T00:00:00-05:00",
    "fromDestination": "ATL",
    "toDestination": "BOS",
    "flightNumber": "UA013",
    "confirmationNumber": "33445569",
    "landingDate": "2025-03-04T03:00:00-05:00",
    "seatId": "19D",
    "seatType": "First Class",
    "baseCost": 410,
    "flightStatus": "available"
  }
];

const reservedFlights = [
  {
    reservedId: 1,
    flightDate: "2025-02-15T10:00:00-05:00",
    clientId: 5,
    flightId: 1,
    baseCost: 200,
    seatType: "Economy"
  },
  {
    reservedId: 2,
    flightDate: "2025-02-22T07:00:00-05:00",
    clientId: 4,
    flightId: 8,
    baseCost: 350,
    seatType: "First Class"
  },
  {
    reservedId: 3,
    flightDate: "2025-02-26T03:00:00-05:00",
    clientId: 3,
    flightId: 12,
    baseCost: 180,
    seatType: "Economy"
  },
  {
    reservedId: 4,
    flightDate: "2025-02-16T11:00:00-05:00",
    clientId: 1,
    flightId: 2,
    baseCost: 500,
    seatType: "First Class"
  },

];
export { clients, flights, reservedFlights };