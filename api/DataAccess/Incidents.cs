using Newtonsoft.Json;
using System;

namespace Incidents_Api.DataAccess
{
    public class Incident
    {
        [JsonProperty(PropertyName = "id")]
        public string Id { get; set; }

        public string IncidentId { get; set; }

        public string Priority { get; set; }

        public string CreatedBy { get; set; }

        public string FirstAssignementGroup { get; set; }

        public string Country { get; set; }

        public string AssignedTo { get; set; }

        public DateTime CreatedDateTime { get; set; }

        public string State { get; set; }   
    }
}
