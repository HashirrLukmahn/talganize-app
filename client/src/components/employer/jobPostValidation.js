export const validate = (formData, currentStep) => {
    const newErrors = {};

    // Step 1 Validation
    if (currentStep === 1) {
        if (!formData?.companyName?.trim()) {
            newErrors.companyName = 'Company name is required';
        }
        if (!formData?.companyWebsite?.trim()) {
            newErrors.companyWebsite = 'Company website is required';
        } else if (!/^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6}\.?)(\/[\w.-]*)*\/?$/.test(formData?.companyWebsite)) {
            newErrors.companyWebsite = 'Invalid website URL';
        }
        if (!formData?.companyLinkedIn?.trim() || !/^(https?:\/\/)?(www\.)?linkedin\.com\/company\/[\w-]+(\/)?$/.test(formData?.companyLinkedIn)) {
            newErrors.companyLinkedIn = 'Invalid LinkedIn URL';
        }
        if (!formData?.companyIndustry?.trim()) {
            newErrors.companyIndustry = 'Company industry is required';
        }
        if (!formData?.companyCountry?.trim()) {
            newErrors.companyCountry = 'Country is required';
        }
        if (!formData?.companyCity?.trim()) {
            newErrors.companyCity = 'City is required';
        }
        if (!formData?.signinemail?.trim()) {
            newErrors.signinemail = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData?.signinemail)) {
            newErrors.signinemail = 'Invalid email format';
        }
    }

    // Step 2 Validation
    if (currentStep === 2) {
        if (!formData?.jobTitle?.trim()) {
            newErrors.jobTitle = 'Job title is required';
        }
        if (!formData?.jobLocationType) {
            newErrors.jobLocationType = 'Job location type is required';
        }
        if ((formData?.jobLocationType === 'OnSite' || formData?.jobLocationType === 'Hybrid') && !formData?.jobLocation?.trim()) {
            newErrors.jobLocation = 'Job location is required for on-site/hybrid roles';
        }
        if ((formData?.jobLocationType === 'Hybrid') && !formData?.hybridDetails?.trim()) {
            newErrors.hybridDetails = 'Hybrid details is required for hybrid roles';
        }
        if (!formData?.minSalary) {
            newErrors.minSalary = 'Minimum salary is required';
        } else if (isNaN(formData?.minSalary) || Number(formData?.minSalary) < 0) {
            newErrors.minSalary = 'Minimum salary must be a non-negative number';
        }
        if (!formData?.maxSalary) {
            newErrors.maxSalary = 'Maximum salary is required';
        } else if (isNaN(formData?.maxSalary) || Number(formData?.maxSalary) < 0) {
            newErrors.maxSalary = 'Maximum salary must be a non-negative number';
        } else if (formData?.minSalary && formData?.maxSalary && Number(formData?.maxSalary) < Number(formData?.minSalary)) {
            newErrors.maxSalary = 'Maximum salary must be greater than or equal to minimum salary';
        }
        if (!formData?.currency) {
            newErrors.currency = 'Currency is required';
        }
        if (!formData?.salaryRate) {
            newErrors.salaryRate = 'Salary rate is required';
        }
    }

    // Step 3 Validation
    if (currentStep === 3) {

        if (formData?.skills?.length === 0) {
            newErrors.skills = 'At least one skill is required';
        }
        if (!formData?.experience?.trim()) {
            newErrors.experience = 'Experience is required';
        } else if (isNaN(formData.experience) || Number(formData.experience) < 0) {
            newErrors.experience = 'Experience must be a non-negative number';
        }
        if (!formData?.jobDescription?.trim()) {
            newErrors.jobDescription = 'Job description is required';
        }
        if (!formData?.managerEmail?.trim()) {
            newErrors.managerEmail = 'Hiring manager email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData?.managerEmail)) {
            newErrors.managerEmail = 'Invalid email format';
        }
    }


    if (currentStep === 4) {
        if (!formData?.qualification.trim()) {
            newErrors.qualification = 'Qualification is required';
        }
    }

    // console.log(newErrors);

    return newErrors;
};