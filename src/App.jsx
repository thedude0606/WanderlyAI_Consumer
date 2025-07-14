import { useState } from 'react'
import './App.css'

// Import images
import step1Upload from './assets/step1-upload.png'
import step2Money from './assets/step2-money.png'
import step3Book from './assets/step3-book.png'
import beachVacation from './assets/beach-vacation.jpg'
import mountainHiking from './assets/mountain-hiking.jpg'
import cityCulture from './assets/city-culture.jpg'
import spaWellness from './assets/spa-wellness.jpg'
import snorkeling from './assets/snorkeling.jpg'
import hotelReceipt from './assets/hotel-receipt.jpg'
import expedaLogo from './assets/expedia-logo.jpg'
import pricelineLogo from './assets/priceline-logo.jpg'
import hiltonLogo from './assets/hilton-logo.png'
import marriottLogo from './assets/marriott-logo.png'
import hotelRoom from './assets/hotel-room.jpg'
import hotelLobby from './assets/hotel-lobby.jpg'
import hotelExterior from './assets/hotel-exterior.jpg'
import hotelPool from './assets/hotel-pool.jpg'
import unlockAnimation from './assets/unlock-animation.gif'
import marriottRoom from './assets/marriott-room.jpg'
import marriottExterior from './assets/marriott-exterior.jpg'
import stRegisBoraBoraBungalow from './assets/st-regis-bora-bora-bungalow.jpg'
import stRegisBoraBora from './assets/st-regis-bora-bora-resort.jpg'
import parkHyattStKittsPool from './assets/park-hyatt-st-kitts-pool.jpg'
import parkHyattStKitts from './assets/park-hyatt-st-kitts-exterior.jpg'

function App() {
  const [currentScreen, setCurrentScreen] = useState('explanation')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [selectedActivities, setSelectedActivities] = useState([])
  const [showUnlockAnimation, setShowUnlockAnimation] = useState(false)

  const questions = [
    {
      id: 'vibe',
      question: 'Which vibe best matches your ideal trip?',
      type: 'single',
      options: [
        { id: 'sun_sand', text: 'Sun & Sand 🏖️', image: beachVacation },
        { id: 'mountain_hiking', text: 'Mountain & Hiking 🏔️', image: mountainHiking },
        { id: 'city_culture', text: 'City & Culture 🏛️', image: cityCulture },
        { id: 'wellness_spa', text: 'Wellness & Spa 🧘', image: spaWellness }
      ]
    },
    {
      id: 'activities',
      question: 'Pick the activities you\'d enjoy this vacation (choose all).',
      type: 'multiple',
      options: [
        { id: 'snorkeling', text: 'Snorkeling', image: snorkeling },
        { id: 'hiking', text: 'Hiking', image: mountainHiking },
        { id: 'museums', text: 'Museums', image: cityCulture },
        { id: 'spa', text: 'Spa Treatments', image: spaWellness }
      ]
    },
    {
      id: 'budget',
      question: 'Your nightly hotel budget, leisure trip.',
      type: 'single',
      options: [
        { id: 'under_100', text: '< $100' },
        { id: '100_250', text: '$100–$250' },
        { id: '250_500', text: '$250–$500' },
        { id: 'over_500', text: '$500+' }
      ]
    },
    {
      id: 'duration',
      question: 'Weekend get‑away or long escape?',
      type: 'single',
      options: [
        { id: '1_3', text: '1–3 nights' },
        { id: '4_7', text: '4–7 nights' },
        { id: '8_plus', text: '8+ nights' }
      ]
    },
    {
      id: 'dining',
      question: 'Fine‑dining meals on a 7‑night vacation.',
      type: 'single',
      options: [
        { id: '0_1', text: '0–1' },
        { id: '2_3', text: '2–3' },
        { id: '4_7', text: '4–7' }
      ]
    },
    {
      id: 'cocktails',
      question: 'Cocktails on a 7‑night vacation.',
      type: 'single',
      options: [
        { id: '0_1', text: '0–1' },
        { id: '2_5', text: '2–5' },
        { id: '6_14', text: '6–14' },
        { id: 'none', text: 'None' }
      ]
    }
  ]

  const offers = [
    {
      id: 'marriott',
      title: 'Book Marriott Hotels',
      description: 'Receive $100 off $1000',
      image: marriottRoom,
      brand: 'Marriott',
      savings: '$100 off',
      minimum: '$1000',
      validUntil: 'Valid until Dec 31, 2025'
    },
    {
      id: 'st_regis',
      title: 'Book St Regis Bora Bora',
      description: 'Receive $50 in Beverage Credits',
      image: stRegisBoraBoraBungalow,
      brand: 'St. Regis',
      savings: '$50 Credits',
      minimum: 'Any booking',
      validUntil: 'Valid until Mar 31, 2025'
    },
    {
      id: 'park_hyatt',
      title: 'Book Park Hyatt St Kitts',
      description: 'Book within the next 7 days and receive $100 excursion credit',
      image: parkHyattStKittsPool,
      brand: 'Park Hyatt',
      savings: '$100 Credit',
      minimum: 'Book within 7 days',
      validUntil: 'Limited time offer'
    }
  ]

  const handleAnswer = (questionId, answerId) => {
    if (questions[currentQuestion].type === 'multiple') {
      if (questionId === 'activities') {
        const newActivities = selectedActivities.includes(answerId)
          ? selectedActivities.filter(id => id !== answerId)
          : [...selectedActivities, answerId]
        setSelectedActivities(newActivities)
        setAnswers({ ...answers, [questionId]: newActivities })
        // Automatically advance to the next question after selecting an activity
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1)
        } else {
          setCurrentScreen('home')
        }
      }
    } else {
      setAnswers({ ...answers, [questionId]: answerId })
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
      } else {
        setCurrentScreen('home')
      }
    }
  }

  const handleContinue = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setCurrentScreen('home')
    }
  }

  const handleBooking = () => {
    setShowUnlockAnimation(true)
    setTimeout(() => {
      setShowUnlockAnimation(false)
      setCurrentScreen('home')
    }, 3000)
  }

  const ExplanationScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-6">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">✈️</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">WanderlyAI</h1>
          <p className="text-blue-100">Turn your travel receipts into cash rewards</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-center mb-6">How It Works</h2>
          
          <div className="space-y-6">
            <div className="bg-white/10 rounded-lg p-4 flex items-center space-x-4">
              <img src={step1Upload} alt="Upload Receipts" className="w-12 h-12 rounded-lg" />
              <div>
                <h3 className="font-semibold">1. Upload Receipts</h3>
                <p className="text-sm text-blue-100">Take photos of your travel receipts and earn instant credits</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-4 flex items-center space-x-4">
              <img src={step2Money} alt="Get Money" className="w-12 h-12 rounded-lg" />
              <div>
                <h3 className="font-semibold">2. Get Money</h3>
                <p className="text-sm text-blue-100">Earn $25 per hotel receipt and $10 per excursion receipt</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-4 flex items-center space-x-4">
              <img src={step3Book} alt="Book Hotels" className="w-12 h-12 rounded-lg" />
              <div>
                <h3 className="font-semibold">3. Book Hotels to Unlock</h3>
                <p className="text-sm text-blue-100">Book your next hotel through us to unlock your credits</p>
              </div>
            </div>
          </div>
        </div>

        <button 
          onClick={() => setCurrentScreen('onboarding')}
          className="w-full bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors"
        >
          Get Started - Earn $25 Credit!
        </button>
      </div>
    </div>
  )

  const OnboardingScreen = () => {
    const currentQ = questions[currentQuestion]
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-6">
        <div className="max-w-md mx-auto">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm">Question {currentQuestion + 1} of {questions.length}</span>
              <span className="text-sm">{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div 
                className="bg-white h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-6">{currentQ.question}</h2>

          <div className="space-y-3 mb-6">
            {currentQ.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleAnswer(currentQ.id, option.id)}
                className={`w-full p-4 rounded-lg border-2 transition-all ${
                  (currentQ.type === 'multiple' && selectedActivities.includes(option.id)) ||
                  (currentQ.type === 'single' && answers[currentQ.id] === option.id)
                    ? 'border-white bg-white/20' 
                    : 'border-white/30 bg-white/10 hover:bg-white/20'
                }`}
              >
                <div className="flex items-center space-x-3">
                  {option.image && (
                    <img src={option.image} alt={option.text} className="w-12 h-12 rounded-lg object-cover" />
                  )}
                  <span className="font-medium">
                    {currentQ.type === 'multiple' && selectedActivities.includes(option.id) ? '✓' : ''}
                    {option.text}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {currentQ.type === 'multiple' && currentQ.id !== 'activities' && (
            <button
              onClick={handleContinue}
              className="w-full bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Continue
            </button>
          )}
        </div>
      </div>
    )
  }

  const HomeScreen = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto bg-white min-h-screen">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-b-3xl">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-xl font-semibold">Welcome back!</h1>
              <p className="text-blue-100">Ready to earn more rewards?</p>
            </div>
            <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              💰
            </button>
          </div>
          
          <div className="bg-white/10 rounded-2xl p-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm">Total Wallet Balance</span>
              <span className="text-sm">💳</span>
            </div>
            <div className="text-3xl font-bold mb-2">$85</div>
            <div className="flex justify-between text-sm">
              <span>Locked: $65</span>
              <span>Available: $20</span>
            </div>
          </div>
          
          <button 
            onClick={() => setCurrentScreen('wallet')}
            className="w-full bg-white/20 text-white py-2 px-4 rounded-lg hover:bg-white/30 transition-colors"
          >
            View Wallet Details
          </button>
        </div>

        {/* Quick Actions */}
        <div className="p-6 grid grid-cols-2 gap-4">
          <button 
            onClick={() => setCurrentScreen('receipts')}
            className="bg-gradient-to-br from-orange-400 to-orange-500 text-white p-4 rounded-2xl text-left hover:shadow-lg transition-all"
          >
            <div className="text-2xl mb-2">📄</div>
            <div className="font-semibold">Upload Receipt</div>
            <div className="text-sm opacity-90">Earn instant credits</div>
          </button>
          
          <button 
            onClick={() => setCurrentScreen('search')}
            className="bg-gradient-to-br from-purple-400 to-purple-500 text-white p-4 rounded-2xl text-left hover:shadow-lg transition-all"
          >
            <div className="text-2xl mb-2">🔍</div>
            <div className="font-semibold">Find Hotels</div>
            <div className="text-sm opacity-90">Best prices guaranteed</div>
          </button>
        </div>

        {/* Recent Activity */}
        <div className="px-6 pb-6">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          
          <div className="space-y-3">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <div className="font-medium">Receipt Processed</div>
                  <div className="text-sm text-gray-600">Marriott Miami - $25 credited</div>
                </div>
              </div>
              <span className="text-green-600 font-semibold">+$25</span>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">🏨</span>
                </div>
                <div>
                  <div className="font-medium">Hotel Booked</div>
                  <div className="text-sm text-gray-600">Hilton Garden Inn - $15 unlocked</div>
                </div>
              </div>
              <span className="text-blue-600 font-semibold">+$15</span>
            </div>
          </div>
        </div>

        <BottomNav currentScreen="home" setCurrentScreen={setCurrentScreen} />
      </div>
    </div>
  )

  const ReceiptScreen = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto bg-white min-h-screen">
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6">
          <h1 className="text-xl font-semibold">Upload Receipts</h1>
          <p className="text-purple-100">Earn credits for your travel expenses</p>
        </div>

        <div className="p-6">
          <div className="border-2 border-dashed border-blue-300 rounded-2xl p-8 text-center mb-6">
            <img src={hotelReceipt} alt="Receipt Example" className="w-20 h-24 mx-auto mb-4 rounded-lg shadow-md" />
            <h3 className="text-lg font-semibold mb-2">Upload Your Receipt</h3>
            <p className="text-gray-600 mb-4">Take a photo or upload an image</p>
            
            <div className="space-y-3">
              <button className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2">
                <span>📷</span>
                <span>Take Photo</span>
              </button>
              <button className="w-full bg-gray-500 text-white py-3 px-6 rounded-lg hover:bg-gray-600 transition-colors flex items-center justify-center space-x-2">
                <span>📁</span>
                <span>Choose File</span>
              </button>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-green-800 mb-2">💰 Earning Rates</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="flex items-center space-x-2">
                  <span>🏨</span>
                  <span>Hotel Receipts</span>
                </span>
                <span className="font-semibold text-green-600">$25</span>
              </div>
              <div className="flex justify-between">
                <span className="flex items-center space-x-2">
                  <span>🎯</span>
                  <span>Excursion Receipts</span>
                </span>
                <span className="font-semibold text-green-600">$10</span>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-4">Recent Receipts</h3>
          
          <div className="space-y-3">
            <div className="bg-gray-50 rounded-lg p-4 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <div className="font-medium">Marriott Miami</div>
                  <div className="text-sm text-gray-600">Processed • $25 credited</div>
                </div>
              </div>
              <span className="text-green-600 font-semibold">+$25</span>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">⏳</span>
                </div>
                <div>
                  <div className="font-medium">Snorkeling Tour</div>
                  <div className="text-sm text-gray-600">Processing • $10 pending</div>
                </div>
              </div>
              <span className="text-yellow-600 font-semibold">+$10</span>
            </div>
          </div>
        </div>

        <BottomNav currentScreen="receipts" setCurrentScreen={setCurrentScreen} />
      </div>
    </div>
  )

  const SearchScreen = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto bg-white min-h-screen">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6">
          <h1 className="text-xl font-semibold">Find Hotels</h1>
          <p className="text-blue-100">Best prices guaranteed with price match</p>
        </div>

        <div className="p-6">
          <div className="space-y-4 mb-6">
            <input 
              type="text" 
              placeholder="Where are you going?"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="grid grid-cols-2 gap-3">
              <input 
                type="text" 
                placeholder="Check-in"
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input 
                type="text" 
                placeholder="Check-out"
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <input 
              type="text" 
              placeholder="2 guests, 1 room"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2">
              <span>🔍</span>
              <span>Search Hotels</span>
            </button>
          </div>

          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <img src={hotelRoom} alt="Hotel Room" className="w-full h-32 object-cover" />
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold">Luxury Downtown Hotel</h3>
                    <p className="text-sm text-gray-600">⭐⭐⭐⭐⭐ Downtown Miami</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold">$289</div>
                    <div className="text-xs text-gray-500">per night</div>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-green-800">🏆 Price Match Guarantee</span>
                    <span className="text-xs text-green-600">Best Deal</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center justify-between">
                      <img src={expedaLogo} alt="Expedia" className="h-4" />
                      <span className="text-gray-600">$299</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <img src={pricelineLogo} alt="Priceline" className="h-4" />
                      <span className="text-gray-600">$295</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <img src={hiltonLogo} alt="Hilton" className="h-4" />
                      <span className="text-gray-600">$310</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <img src={marriottLogo} alt="Marriott" className="h-4" />
                      <span className="text-gray-600">$305</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
                  <div className="text-sm font-semibold text-blue-800 mb-1">💰 Dollars Unlocked</div>
                  <div className="text-lg font-bold text-blue-600">$28</div>
                  <div className="text-xs text-blue-600">Credits unlocked after booking</div>
                </div>
                
                <button 
                  onClick={handleBooking}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-lg hover:shadow-lg transition-all font-semibold"
                >
                  Book Now & Unlock Credits
                </button>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <img src={hotelLobby} alt="Hotel Lobby" className="w-full h-32 object-cover" />
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold">Beachfront Resort</h3>
                    <p className="text-sm text-gray-600">⭐⭐⭐⭐ Miami Beach</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold">$199</div>
                    <div className="text-xs text-gray-500">per night</div>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-green-800">🏆 Price Match Guarantee</span>
                    <span className="text-xs text-green-600">Best Deal</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center justify-between">
                      <img src={expedaLogo} alt="Expedia" className="h-4" />
                      <span className="text-gray-600">$215</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <img src={pricelineLogo} alt="Priceline" className="h-4" />
                      <span className="text-gray-600">$209</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <img src={hiltonLogo} alt="Hilton" className="h-4" />
                      <span className="text-gray-600">$225</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <img src={marriottLogo} alt="Marriott" className="h-4" />
                      <span className="text-gray-600">$220</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
                  <div className="text-sm font-semibold text-blue-800 mb-1">💰 Dollars Unlocked</div>
                  <div className="text-lg font-bold text-blue-600">$22</div>
                  <div className="text-xs text-blue-600">Credits unlocked after booking</div>
                </div>
                
                <button 
                  onClick={handleBooking}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-lg hover:shadow-lg transition-all font-semibold"
                >
                  Book Now & Unlock Credits
                </button>
              </div>
            </div>
          </div>
        </div>

        <BottomNav currentScreen="search" setCurrentScreen={setCurrentScreen} />
      </div>
    </div>
  )

  const OffersScreen = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto bg-white min-h-screen">
        <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-6">
          <h1 className="text-xl font-semibold">Special Offers</h1>
          <p className="text-purple-100">Exclusive deals and bonus credits</p>
        </div>

        <div className="p-6">
          <div className="space-y-6">
            {offers.map((offer) => (
              <div key={offer.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <img src={offer.image} alt={offer.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full">
                      {offer.brand}
                    </span>
                    <span className="text-xs text-gray-500">{offer.validUntil}</span>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2">{offer.title}</h3>
                  <p className="text-gray-600 mb-3">{offer.description}</p>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-3 mb-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm font-semibold text-purple-800">Savings</div>
                        <div className="text-lg font-bold text-purple-600">{offer.savings}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-purple-800">Minimum</div>
                        <div className="text-sm text-purple-600">{offer.minimum}</div>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 px-6 rounded-lg hover:shadow-lg transition-all font-semibold">
                    Claim Offer
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 How Offers Work</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Book qualifying hotels through WanderlyAI</li>
              <li>• Offers are automatically applied at checkout</li>
              <li>• Credits and savings are added to your wallet</li>
              <li>• Terms and conditions apply to each offer</li>
            </ul>
          </div>
        </div>

        <BottomNav currentScreen="offers" setCurrentScreen={setCurrentScreen} />
      </div>
    </div>
  )

  const WalletScreen = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto bg-white min-h-screen">
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6">
          <h1 className="text-xl font-semibold">Wallet</h1>
          <p className="text-green-100">Manage your travel credits</p>
        </div>

        <div className="p-6">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-6 mb-6">
            <div className="text-center">
              <div className="text-sm opacity-90 mb-2">Available Balance</div>
              <div className="text-4xl font-bold mb-4">$20</div>
              <button className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-green-50 transition-colors flex items-center space-x-2 mx-auto">
                <span>💳</span>
                <span>Withdraw to Bank</span>
              </button>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 mb-6">
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-2">Locked Credits</div>
              <div className="text-3xl font-bold text-gray-700 mb-2">$65</div>
              <div className="text-xs text-gray-500">Unlock by booking hotels through WanderlyAI</div>
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
          
          <div className="space-y-3">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">📄</span>
                </div>
                <div>
                  <div className="font-medium">Receipt Uploaded</div>
                  <div className="text-sm text-gray-600">Marriott Miami</div>
                </div>
              </div>
              <span className="text-green-600 font-semibold">+$25</span>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">🏨</span>
                </div>
                <div>
                  <div className="font-medium">Credits Unlocked</div>
                  <div className="text-sm text-gray-600">Hilton Garden Inn booking</div>
                </div>
              </div>
              <span className="text-blue-600 font-semibold">+$15</span>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">💳</span>
                </div>
                <div>
                  <div className="font-medium">Withdrawal</div>
                  <div className="text-sm text-gray-600">To Bank Account ****1234</div>
                </div>
              </div>
              <span className="text-gray-600 font-semibold">-$50</span>
            </div>
          </div>
        </div>

        <BottomNav currentScreen="wallet" setCurrentScreen={setCurrentScreen} />
      </div>
    </div>
  )

  const ProfileScreen = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto bg-white min-h-screen">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-2xl">👤</span>
            </div>
            <div>
              <h1 className="text-xl font-semibold">Sarah Johnson</h1>
              <p className="text-indigo-100">Gold Member</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            <button 
              onClick={() => setCurrentScreen('home')}
              className="w-full bg-gray-50 hover:bg-gray-100 p-4 rounded-lg flex items-center justify-between transition-colors"
            >
              <div className="flex items-center space-x-3">
                <span className="text-xl">📊</span>
                <span className="font-medium">Travel Insights</span>
              </div>
              <span className="text-gray-400">→</span>
            </button>
            
            <button 
              onClick={() => setCurrentScreen('receipts')}
              className="w-full bg-gray-50 hover:bg-gray-100 p-4 rounded-lg flex items-center justify-between transition-colors"
            >
              <div className="flex items-center space-x-3">
                <span className="text-xl">📄</span>
                <span className="font-medium">Receipt History</span>
              </div>
              <span className="text-gray-400">→</span>
            </button>
            
            <button 
              onClick={() => setCurrentScreen('home')}
              className="w-full bg-gray-50 hover:bg-gray-100 p-4 rounded-lg flex items-center justify-between transition-colors"
            >
              <div className="flex items-center space-x-3">
                <span className="text-xl">👥</span>
                <span className="font-medium">Refer Friends</span>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold">Earn $5</div>
                <span className="text-gray-400">→</span>
              </div>
            </button>
            
            <button 
              onClick={() => setCurrentScreen('home')}
              className="w-full bg-gray-50 hover:bg-gray-100 p-4 rounded-lg flex items-center justify-between transition-colors"
            >
              <div className="flex items-center space-x-3">
                <span className="text-xl">⚙️</span>
                <span className="font-medium">Settings</span>
              </div>
              <span className="text-gray-400">→</span>
            </button>
            
            <button 
              onClick={() => setCurrentScreen('home')}
              className="w-full bg-gray-50 hover:bg-gray-100 p-4 rounded-lg flex items-center justify-between transition-colors"
            >
              <div className="flex items-center space-x-3">
                <span className="text-xl">❓</span>
                <span className="font-medium">Help & Support</span>
              </div>
              <span className="text-gray-400">→</span>
            </button>
          </div>

          <div className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-4">
            <h4 className="font-semibold text-indigo-800 mb-2">🏆 Membership Benefits</h4>
            <ul className="text-sm text-indigo-700 space-y-1">
              <li>• Priority customer support</li>
              <li>• Exclusive hotel offers</li>
              <li>• Higher earning rates on receipts</li>
              <li>• Early access to new features</li>
            </ul>
          </div>
        </div>

        <BottomNav currentScreen="profile" setCurrentScreen={setCurrentScreen} />
      </div>
    </div>
  )

  const UnlockAnimationScreen = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-sm mx-4 text-center">
        <img src={unlockAnimation} alt="Unlocking Credits" className="w-20 h-20 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Credits Unlocked! 🎉</h2>
        <div className="text-3xl font-bold text-green-600 mb-4">$28</div>
        <p className="text-gray-600 mb-4">Your credits have been unlocked and added to your available balance.</p>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
          <p className="text-sm text-yellow-800">
            <strong>Disclaimer:</strong> Credits are unlocked after booking completion and payment processing.
          </p>
        </div>
      </div>
    </div>
  )

  const BottomNav = ({ currentScreen, setCurrentScreen }) => (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200">
      <div className="grid grid-cols-6 py-2">
        <button 
          onClick={() => setCurrentScreen('home')}
          className={`p-3 text-center ${currentScreen === 'home' ? 'text-blue-600' : 'text-gray-400'}`}
        >
          <div className="text-lg">🏠</div>
          <div className="text-xs">Home</div>
        </button>
        <button 
          onClick={() => setCurrentScreen('receipts')}
          className={`p-3 text-center ${currentScreen === 'receipts' ? 'text-purple-600' : 'text-gray-400'}`}
        >
          <div className="text-lg">📄</div>
          <div className="text-xs">Receipts</div>
        </button>
        <button 
          onClick={() => setCurrentScreen('search')}
          className={`p-3 text-center ${currentScreen === 'search' ? 'text-blue-600' : 'text-gray-400'}`}
        >
          <div className="text-lg">🔍</div>
          <div className="text-xs">Search</div>
        </button>
        <button 
          onClick={() => setCurrentScreen('offers')}
          className={`p-3 text-center ${currentScreen === 'offers' ? 'text-purple-600' : 'text-gray-400'}`}
        >
          <div className="text-lg">🎁</div>
          <div className="text-xs">Offers</div>
        </button>
        <button 
          onClick={() => setCurrentScreen('wallet')}
          className={`p-3 text-center ${currentScreen === 'wallet' ? 'text-green-600' : 'text-gray-400'}`}
        >
          <div className="text-lg">💰</div>
          <div className="text-xs">Wallet</div>
        </button>
        <button 
          onClick={() => setCurrentScreen('profile')}
          className={`p-3 text-center ${currentScreen === 'profile' ? 'text-indigo-600' : 'text-gray-400'}`}
        >
          <div className="text-lg">👤</div>
          <div className="text-xs">Profile</div>
        </button>
      </div>
    </div>
  )

  return (
    <div className="App">
      {currentScreen === 'explanation' && <ExplanationScreen />}
      {currentScreen === 'onboarding' && <OnboardingScreen />}
      {currentScreen === 'home' && <HomeScreen />}
      {currentScreen === 'receipts' && <ReceiptScreen />}
      {currentScreen === 'search' && <SearchScreen />}
      {currentScreen === 'offers' && <OffersScreen />}
      {currentScreen === 'wallet' && <WalletScreen />}
      {currentScreen === 'profile' && <ProfileScreen />}
      {showUnlockAnimation && <UnlockAnimationScreen />}
    </div>
  )
}

export default App


