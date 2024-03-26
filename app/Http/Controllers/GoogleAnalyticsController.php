<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Google\Analytics\Data\V1beta\Client\BetaAnalyticsDataClient;
use Google\Analytics\Data\V1beta\DateRange;
use Google\Analytics\Data\V1beta\Dimension;
use Google\Analytics\Data\V1beta\Metric;
use Google\Analytics\Data\V1beta\RunReportRequest;

class GoogleAnalyticsController extends Controller
{
	public function index(Request $request)
	{
		// Retrieve query parameters from the request
		$nDaysAgo = $request->query('nDaysAgo', 7); // Default to 7 if not provided
		$dimension = $request->query('dimension', 'pageTitle'); // Default to 'pageTitle' if not provided
		$metric = $request->query('metric', 'screenPageViews'); // Default to 'screenPageViews' if not provided

		$test = [
			'nDaysAgo' => $nDaysAgo,
			'dimension' => $dimension,
			'metric' => $metric,
		];

		// return json_encode($test);

		// Your existing code to retrieve credentials...

		$property_id = env('GOOGLE_PROPERTY_ID', 'null');
		if ($property_id == 'null') {
			return response()->json('Please set the GOOGLE_PROPERTY_ID in your .env file');
		}

		// Create an associative array from environment variables
		$credentials = [
			"type" => getenv('GOOGLE_TYPE'),
			"project_id" => getenv('GOOGLE_PROJECT_ID'),
			"private_key_id" => getenv('GOOGLE_PRIVATE_KEY_ID'),
			"private_key" => getenv('GOOGLE_PRIVATE_KEY'),
			"client_email" => getenv('GOOGLE_CLIENT_EMAIL'),
			"client_id" => getenv('GOOGLE_CLIENT_ID'),
			"auth_uri" => getenv('GOOGLE_AUTH_URI'),
			"token_uri" => getenv('GOOGLE_TOKEN_URI'),
			"auth_provider_x509_cert_url" => getenv('GOOGLE_AUTH_PROVIDER_X509_CERT_URL'),
			"client_x509_cert_url" => getenv('GOOGLE_CLIENT_X509_CERT_URL'),
			"universe_domain" => getenv('GOOGLE_UNIVERSE_DOMAIN')
		];

		$client = new BetaAnalyticsDataClient([
			'credentials' => $credentials,
		]);

		if (empty($client)) {
			return response()->json('Error creating client');
		}

		// Make an API call.
		$request = (new RunReportRequest())
			->setProperty('properties/' . $property_id)
			->setDateRanges([
				new DateRange([
					'start_date' => "$nDaysAgo daysAgo", // Use $nDaysAgo to dynamically set the start date
					'end_date' => 'today',
				]),
			])
			->setDimensions([
				new Dimension([
					'name' => $dimension,
				]),
			])
			->setMetrics([
				new Metric([
					'name' => $metric,
				])
			]);

		$response = $client->runReport($request);

		// Build JSON array of response
		$data = [];
		$rows = $response->getRows();
		foreach ($rows as $row) {
			$data[] = [
				'dimension' => $row->getDimensionValues()[0]->getValue(),
				'metric' => $row->getMetricValues()[0]->getValue(),
			];
		}

		// Return JSON response
		return response()->json($data);
	}
}
