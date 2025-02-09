import React, { useState } from 'react';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import LuggageIcon from '@mui/icons-material/Luggage';
import { Link } from 'react-router-dom'
	
export function Block6() {
	const [orderPlaced, setOrderPlaced] = useState(false);
	const [from, setFrom] = useState('');
	const [to, setTo] = useState('');
	const [passengers, setPassengers] = useState('');
	const [luggage, setLuggage] = useState('');
	const [error, setError] = useState('');

	const handleOrder = () => {
			if (!from || !to || !passengers || !luggage) {
					setError('Please fill in all the elements');
					return;
			}

			setError('');
			setOrderPlaced(true);
			setTimeout(() => {
					setOrderPlaced(false);
			}, 5000);
	};
	const scrollToTop = () => {
		window.scrollTo(0, 0);
};
	return (
			<div className="max-w-[1600px] w-full mx-auto flex justify-between px-4"> 
					<div className="w-full lg:w-[60%] bg-white shadow-lg rounded-lg p-6 mt-10"> 
							<h1 className="text-3xl font-bold text-black text-center mb-6 uppercase">
									HURGHADA AIRPORT TRANSFERS
							</h1>

							<div className="space-y-4">
									<div className="relative flex items-center">
											<div className="absolute left-3 top-12 transform -translate-y-1/2">
													<FlightTakeoffIcon className="text-black" />
											</div>
											<div className="flex-1">
													<label className="text-black font-semibold uppercase">FROM</label>
													<select 
															className="w-full bg-gray-100 border border-gray-300 rounded-lg py-3 pl-12 focus:ring-2 focus:ring-black focus:outline-none"
															value={from}
															onChange={(e) => setFrom(e.target.value)}
													>
															<option value="">Select Airport</option>
															<option>Hurghada International Airport (HRG)</option>
															<option>Cairo International Airport</option>
															<option>Sharm El-Sheikh Airport</option>
													</select>
											</div>
									</div>

									<div className="relative flex items-center">
											<div className="absolute left-3 top-12 transform -translate-y-1/2">
													<LocationOnIcon className="text-black" />
											</div>
											<div className="flex-1">
													<label className="text-black font-semibold uppercase">TO</label>
													<select 
															className="w-full bg-gray-100 border border-gray-300 rounded-lg py-3 pl-12 focus:ring-2 focus:ring-black focus:outline-none"
															value={to}
															onChange={(e) => setTo(e.target.value)}
													>
															<option value="">Select Destination</option>
															<option>Hotel</option>
															<option>City Center</option>
															<option>Other Location</option>
													</select>
											</div>
									</div>

									<div className="grid grid-cols-2 gap-4">
											<div className="relative flex items-center">
													<div className="absolute left-3 top-12 transform -translate-y-1/2">
															<CalendarTodayIcon className="text-black" />
													</div>
													<div className="flex-1">
															<label className="text-black font-semibold uppercase">SELECT DATE</label>
															<input
																	type="date"
																	className="w-full bg-gray-100 border border-gray-300 rounded-lg py-3 pl-12 focus:ring-2 focus:ring-black focus:outline-none"
															/>
													</div>
											</div>

											<div className="relative flex items-center">
													<div className="absolute left-3 top-12 transform -translate-y-1/2">
															<AccessTimeIcon className="text-black" />
													</div>
													<div className="flex-1">
															<label className="text-black font-semibold uppercase">SELECT TIME</label>
															<input
																	type="time"
																	className="w-full bg-gray-100 border border-gray-300 rounded-lg py-3 pl-12 focus:ring-2 focus:ring-black focus:outline-none"
															/>
													</div>
											</div>
									</div>

									<div className="grid grid-cols-2 gap-4">
											<div className="relative flex items-center">
													<div className="absolute left-3 top-11 transform -translate-y-1/2">
															<PeopleIcon className="text-black" />
													</div>
													<div className="flex-1">
															<label className="text-black font-semibold uppercase">PASSENGERS</label>
															<input
																	type="number"
																	value={passengers}
																	onChange={(e) => setPassengers(e.target.value)}
																	placeholder="Enter number of passengers"
																	className="w-full bg-gray-100 border border-gray-300 rounded-lg py-3 pl-12 focus:ring-2 focus:ring-black focus:outline-none"
															/>
													</div>
											</div>

											<div className="relative flex items-center">
													<div className="absolute left-3 top-12 transform -translate-y-1/2">
															<LuggageIcon className="text-black" />
													</div>
													<div className="flex-1">
															<label className="text-black font-semibold uppercase">LUGGAGE PIECES</label>
															<input
																	type="number"
																	value={luggage}
																	onChange={(e) => setLuggage(e.target.value)}
																	placeholder="Enter number of luggage pieces"
																	className="w-full bg-gray-100 border border-gray-300 rounded-lg py-3 pl-12 focus:ring-2 focus:ring-black focus:outline-none"
															/>
													</div>
											</div>
									</div>
							</div>

							<button
									onClick={handleOrder}
									className="w-full bg-black text-white font-semibold rounded-lg py-3 mt-6 hover:opacity-90 transition"
							>
									<span className="flex items-center justify-center space-x-2">
											<span>ORDER</span>
									</span>
							</button>

							{error && (
									<div className="text-red-500 text-center mt-4">
											<p>{error}</p>
									</div>
							)}

							{orderPlaced && (
									<div className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-green-100 border text-black px-6 py-3 rounded-lg shadow-lg">
											<p>Your order has been successfully placed! We'll take care of everything for you.</p>
									</div>
							)}
         <Link to='/Airporttransfer'> 
							{!orderPlaced && (
								<p className="text-black text-center mt-4 uppercase" onClick={scrollToTop}>EXPERIENCE THE JOURNEY OF A LIFETIME WITH US!</p>
							)} </Link>
					</div>

					<div className="w-full lg:w-[35%] mt-10 ml-6">
							<div>
									<h1 className="text-xl font-bold">Is it easy to find a taxi at Hurghada airport?</h1>
									<p>Although there are many taxis and taxi services available at Hurghada Airport, keep in mind that taxis are poorly regulated in Egypt, and the meters can be unreliable. Several travellers have also shared that they had to wait longer than expected or felt that their driver chose longer routes in order to hike up the price of the journey. To be greeted at arrivals and enjoy a stress-free airport transfer that is both fixed-rate and pre-paid, simply book in advance with Welcome Pickups.</p>
							</div>
							<div className="mt-6">
									<h1 className="text-xl font-bold">Where will my driver find me?</h1>
									<p>The day before you arrive, you will receive an email from us containing your driver’s name, phone number, and a recent photo. Once you land at Hurghada Airport and go through the arrivals gate, your driver will be waiting for you holding up a sign with your name on it so you can’t miss them. You can also contact your driver via the Welcome Pickups app chat feature.</p>
							</div>
							<div className="mt-6">
									<h1 className="text-xl font-bold">What happens if my flight is delayed?</h1>
									<p>You really don’t need to worry about your flight being delayed or arriving earlier than expected. Flight plans are beyond your control and can change at a moment’s notice. We know this, and that’s why all of our Hurghada airport taxi drivers receive live updates on your plane’s arrival time. That way, we can guarantee that your driver will be there waiting for you when you arrive, at no extra cost.</p>
							</div>
					</div>
			</div>
	);
}

